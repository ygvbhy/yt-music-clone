import Image from "next/image";
import React from "react";

const Header = ({ children }) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1707833558984-3293e794031c"
            fill
            alt="mediaItem"
            className="object-cover"
          />
          <div className="absolute top-0 bg-black opacity-40 w-full h-[400px]"></div>
          <div className="absolute top-0 bg-gradient-to-t from-black w-full h-[400px]"></div>
        </div>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
