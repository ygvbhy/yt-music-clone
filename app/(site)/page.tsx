"use client";
// 라우트에 영향을 주지 않는 폴더 (site)
// page.tsx 를 여기에 만들어서 Home Page 를 이 파일로 지정 할 수 있음
import { sleep } from "@/lib/utils";
import React from "react";
import { Category } from "./components/Category.jsx";
import PagePadding from "@/components/PagePadding.jsx";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray } from "@/lib/dummyData.js";
import UserIcon from "@/components/UserIcon.jsx";

const page = async () => {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category></Category>
        <div className="mt-12"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray1]}
          Thumnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon />
            </div>
          }
          title="다시 듣기"
          subTitle="SK"
        />
      </div>
    </PagePadding>
  );
};

export default page;
