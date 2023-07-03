"use client";
import ApiVideoPlayer from "@api.video/react-player";
import React from "react";

type PlayerViewProps = {
  params: { videoId: string };
};

export default function page({ params }: PlayerViewProps) {
  return (
    <ApiVideoPlayer
      video={{ id: params.videoId }}
      style={{ width: 500, height: 400 }}
    />
  );
}
