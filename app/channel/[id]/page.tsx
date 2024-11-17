import React from "react";

interface ChannelProps {
  params: {
    id: string;
  };
}

const page = (props: ChannelProps) => {
  return <div>channel/[{props.params.id}]</div>;
};

export default page;
