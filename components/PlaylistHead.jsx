"use client";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import IconButton from "./elements/IconButton";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";

const PlaylistHead = ({ playlist = {} } = {}) => {
  const { playlistName, owner, songList } = playlist;

  const randomSong = getRandomElementFromArray(songList);

  return (
    <section className="flex flex-col items-center  gap-[50px] lg:flex-row">
      <div className=" relative h-[240px] w-[240px]">
        <Image src={randomSong?.imageSrc} alt="songImg" fill></Image>
      </div>
      <article className=" flex flex-col justify-center">
        <div className="font-bold text-[28px]">{playlistName}</div>
        <div className=" text-neutral-400 mt-4 text-[14px]">
          <div>{`앨범 • ${owner} • 2024년 `}</div>
          <div>{`${songList.length}곡 • 15분`}</div>
        </div>
        <ul>
          <IconButton icon={<FiMoreVertical size={24} />} />
        </ul>
      </article>
    </section>
  );
};

export default PlaylistHead;
