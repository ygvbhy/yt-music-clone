"use client";
// 라우트에 영향을 주지 않는 폴더 (site)
// page.tsx 를 여기에 만들어서 Home Page 를 이 파일로 지정 할 수 있음
import { sleep } from "@/lib/utils";
import React from "react";
import { Category } from "./components/Category.jsx";
import PagePadding from "@/components/PagePadding.jsx";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData.js";
import UserIcon from "@/components/UserIcon.jsx";

const page = async () => {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [await getPlaylistById(1)];
  const dummyPlaylistArray3 = [await getPlaylistById(2)];
  const dummyPlaylistArray4 = [await getPlaylistById(3)];

  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category></Category>
        <div className="mt-12"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray1]}
          Thumbnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon size="lg" />
            </div>
          }
          title="다시 듣기"
          subTitle="SK"
        />
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray2]}
          title="케이시 - Full Bloom"
          subTitle="새로운 앨범"
        />
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray3]}
          title="커뮤니티 제공"
        />
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray4]}
          title="커버 및 리믹스"
        />
      </div>
    </PagePadding>
  );
};

export default page;
