import { TopSong } from "@/types";
import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretUp } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";

interface SongCardProps {
  song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <article className="flex flex-row gap-4 h-[48px] w-[400px]">
      <div className="w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="img" fill className=" object-cover" />
      </div>
      <div className="flex flex-row items-center gap-4">
        {song.rank === song.prevRank ? (
          <FaCircle size={8} />
        ) : song.rank > song.prevRank ? (
          <AiOutlineCaretUp color="#3ca63f" />
        ) : (
          <AiOutlineCaretDown color="#ff0000" />
        )}
      </div>
    </article>
  );
};

export default SongCard;
