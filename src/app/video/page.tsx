"use client";
import { ChangeEvent, useState } from "react";
import { VideoUploader } from "@api.video/video-uploader";
import Link from "next/link";
import ApiVideoPlayer from "@api.video/react-player";

export default function page() {
  const [upload, setUpload] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [videoId, setVideoId] = useState<string | undefined>(undefined);

  async function handleFile(event: ChangeEvent<HTMLInputElement>) {
    if (!event.currentTarget.files) return;
    try {
      setUpload(true);
      setVideoId(undefined);
      const videoUploader = new VideoUploader({
        uploadToken: "toyFQ9rg8g3evkEjXrWuK8t",
        file: event.currentTarget.files[0],
      });
      videoUploader.onProgress((e) =>
        setProgress(Math.round((e.uploadedBytes * 100) / e.totalBytes))
      );
      videoUploader.onPlayable((e) => setVideoId(e.videoId));
      await videoUploader.upload();
    } catch (error) {
      console.log("Encouteed an error", error);
    } finally {
      setUpload(false);
    }
  }

  return (
    <main>
      <input type="file" onChange={handleFile} />
      <div>
        {upload && progress < 100 && `video is uploading..- ${progress}%`}
        {progress >= 100 && !videoId && "processing...."}
        {videoId && "Done"}
      </div>
      {videoId && (
        <ApiVideoPlayer
          video={{ id: videoId }}
          style={{ width: 500, height: 400 }}
        />
      )}
    </main>
  );
}
