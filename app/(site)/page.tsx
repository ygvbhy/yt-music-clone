"use client";
// 라우트에 영향을 주지 않는 폴더 (site)
// page.tsx 를 여기에 만들어서 Home Page 를 이 파일로 지정 할 수 있음
import { sleep } from "@/lib/utils";
import React from "react";
import { Category } from "./components/Category.jsx";

const page = async () => {
  return (
    <div className="min-h-[600px]">
      <div className="mt-9"></div>
      <Category></Category>
    </div>
  );
};

export default page;
