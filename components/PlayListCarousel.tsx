import React from "react";
import type { Playlist } from "@/types";

interface PlayListCarouselProps {
  title: string;
  subTitle?: string;
  Thumnail?: React.ReactNode;
  playlistArray?: Playlist[];
}

const PlayListCarousel: React.FC<PlayListCarouselProps> = ({
  title,
  subTitle,
  Thumnail,
  playlistArray,
}) => {
  return (
    <div>
      PlayListCarousel
      {Thumnail}
    </div>
  );
};

export default PlayListCarousel;
