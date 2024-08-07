import React from "react";
import Header from "@/components/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header>{children}</Header>
    </div>
  );
};

export default layout;
