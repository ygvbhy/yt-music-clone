"use client";
import React from "react";
import { Slider as PlayerSlider } from "@/components/ui/playerSlider";
import { useAudio } from "react-use";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoShuffle,
  IoVolumeHighOutline,
} from "react-icons/io5";
import { AiFillCaretUp, AiOutlinePause } from "react-icons/ai";
import usePlayerState from "@/hooks/usePlayerState";
import { ClipLoader } from "react-spinners";
import { RiPlayFill } from "react-icons/ri";
import Image from "next/image";
import { RxLoop } from "react-icons/rx";

const PlayerContent = () => {
  const { activeSong } = usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src,
    autoPlay: false,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0;

  const onClickPreBtn = () => {};
  const onClickNextBtn = () => {};
  const onClickStartBtn = () => {
    controls.play();
  };
  const onClickPauseBtn = () => {
    controls.pause();
  };

  return (
    <div className="h-full w-full relative">
      <div className=" absolute top-[-16px] w-full">
        <PlayerSlider
          className="w-full"
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={(value) => {
            controls.seek(value);
          }}
        />
      </div>
      {audio}
      <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
        <div className="h-full flex flxe-row items-center gap-1">
          <IoPlaySkipBackSharp
            size={24}
            className=" cursor-pointer"
            onClick={onClickPreBtn}
          />
          {isLoading ? (
            <ClipLoader color="#fff" />
          ) : state.playing ? (
            <AiOutlinePause
              size={40}
              className=" cursor-pointer"
              onClick={onClickPauseBtn}
            />
          ) : (
            <RiPlayFill
              size={40}
              className=" cursor-pointer"
              onClick={onClickStartBtn}
            />
          )}
          <IoPlaySkipForwardSharp
            size={24}
            className=" cursor-pointer"
            onClick={onClickNextBtn}
          />
        </div>
        <article>
          <div className="flex flex-row gap-4 items-center">
            <div className=" relative w-[40px] h-[40px]">
              <Image
                fill
                className="object-cover"
                src={activeSong?.imageSrc}
                alt="img"
              />
            </div>
            <div className="flex flex-col">
              <div>{activeSong?.name}</div>
              <div className="text-neutral-500 text-[14px]">
                {activeSong.channel} • 조회수 114만회 • 좋아요 1.3만개{" "}
              </div>
            </div>
          </div>
        </article>
        <div className="flex flex-row gap-2">
          <div className="flex-row gap-2 hidden lg:flex">
            <IoVolumeHighOutline size={24} className="cursor-pointer" />
            <IoShuffle size={24} className="cursor-pointer" />
            <RxLoop size={24} className="cursor-pointer" />
          </div>
          <div>
            <AiFillCaretUp size={24} className="cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerContent;
