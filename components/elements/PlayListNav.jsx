"use client";
import React from "react";
import { IoMdPlayCircle } from "react-icons/io";
import usePlayerState from "@/hooks/usePlayerState";

const PlayListNav = ({ playlist }) => {
  const { id, owner, playlistName, songList } = playlist;
  const { addSongList } = usePlayerState();
  const onClickPlay = () => {
    // TODO playMusic
    addSongList(songList);
  };

  return (
    <li className="mx-3 px-4 h-[56px] flex flex-row justify-between items-center hover:bg-neutral-700 rounded-lg group cursor-pointer">
      <div>
        <div className="text-[14px]">{playlistName}</div>
        <div className="text-[12px] text-neutral-500">{owner}</div>
      </div>
      <div onClick={onClickPlay} className="hidden group-hover:block">
        <IoMdPlayCircle size={30}></IoMdPlayCircle>
      </div>
    </li>
  );
};

export default PlayListNav;
