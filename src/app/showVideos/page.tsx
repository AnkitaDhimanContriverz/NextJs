import React from "react";
import ApiVideoClient from "@api.video/nodejs-client";
import Link from "next/link";
export default async function page() {
  const videos = new ApiVideoClient({ apiKey: process.env.REACT_APP_API_KEY });
  const allVideos = await videos.videos.list();
  return (
    <>
      <div>
        {allVideos.data.length === 0 && (
          <Link href={"/"}>No Videos available, Click here to upload </Link>
        )}
        {allVideos.data.map((video, i) => (
          <div>
            <ul>
              <li>
                <Link key={i} href={`video/${video.videoId}`}>
                  {video.title}
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
