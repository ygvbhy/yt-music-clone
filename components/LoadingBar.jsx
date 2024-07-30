// SSR 이 되는 동안 해당 페이지가 보여짐
"use client";
// 애니메이션을 위해 use client 를 사용 한게 아님
// BarLoader 안에 useState, 즉 CSR 애 포함되는 함수를 써서 작성 한거임
import React from "react";
import { BarLoader } from "react-spinners";

const LoadingBar = () => {
  return (
    <div className="w-full">
      <BarLoader color="red" cssOverride={{ width: "100%" }} />
    </div>
  );
};

export default LoadingBar;
