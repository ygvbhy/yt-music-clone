import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";

interface ChannelProps {
  params: {
    id: string;
  };
}

const page = async (props: ChannelProps) => {
  const channel = await getChannelById(+props.params.id);

  if (!channel) permanentRedirect("/");

  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      channel/[{props.params.id}]
    </PagePadding>
  );
};

export default page;
