"use client";
import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import IconButton from "./IconButton";
import { IoCloseSharp } from "react-icons/io5";

const Logo = ({ isInDrawer = false, onClickClose = () => {} }) => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };

  const onClickMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      {isInDrawer ? (
        <IconButton
          icon={<IoCloseSharp size={30}></IoCloseSharp>}
          onClickLogo={onClickClose}
        />
      ) : (
        <IconButton
          icon={<RxHamburgerMenu size={24}></RxHamburgerMenu>}
          onClickLogo={onClickMenu}
        />
      )}
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
