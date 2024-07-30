// SSR 이 되는 동안 해당 페이지가 보여짐
"use client";
// 애니메이션을 위해 use client 를 사용 한게 아님
// BarLoader 안에 useState, 즉 CSR 애 포함되는 함수를 써서 작성 한거임
import React from "react";
import LoadingBar from "@/components/LoadingBar";

const loading = () => {
  return <LoadingBar></LoadingBar>;
};

export default loading;
