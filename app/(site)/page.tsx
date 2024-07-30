// 라우트에 영향을 주지 않는 폴더 (site)
// page.tsx 를 여기에 만들어서 Home Page 를 이 파일로 지정 할 수 있음
import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
  console.log("before HomePage sleep ...");
  await sleep(4000);
  console.log("after HomePage sleep ...");
  // throw new Error("my Error");
  return <div>HomePage</div>;
};

export default page;
