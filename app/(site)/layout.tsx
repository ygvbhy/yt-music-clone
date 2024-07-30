import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      layout 이 먼저 로딩
      {children}
    </div>
  );
};

export default layout;
