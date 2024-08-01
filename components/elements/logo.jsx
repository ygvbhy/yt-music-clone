"use client";
import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import IconButton from "./IconButton";

const Logo = () => {
  const { push } = useRouter();
  const onClickLogo = () => {
    // home 이동
    push("/");
  };

  const onClickMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      <IconButton
        icon={<RxHamburgerMenu size={24}></RxHamburgerMenu>}
        onClickLogo={onClickMenu}
      />
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image
          src={"/main-logo.svg"}
          width={100}
          height={30}
          alt="logo"
        ></Image>
      </div>
    </section>
  );
};

export default Logo;
