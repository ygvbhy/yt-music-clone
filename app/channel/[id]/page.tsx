import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";
import { FiMusic, FiShuffle } from "react-icons/fi";

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
      <div className="mt-[150px]"></div>
      <section>
        <div className="text-[28px] font-bold ">{channel.name}</div>
        <article className=" lg:hidden mt-4">
          <div>
            <DarkButton
              label={"구독중 4.18만"}
              className={"w-[230px] flex justify-center"}
            />
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <WhiteButton
              label={"셔플"}
              icon={<FiShuffle size={16} />}
              className={""}
            />
            <WhiteButton
              label={"뮤직 스테이션"}
              icon={<FiMusic size={16} />}
              className={""}
            />
          </div>
        </article>
        <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
          <WhiteButton
            label={"셔플"}
            icon={<FiShuffle size={16} />}
            className={""}
          />
          <WhiteButton
            label={"뮤직 스테이션"}
            icon={<FiMusic size={16} />}
            className={""}
          />
          <DarkButton
            label={"구독중 4.18만"}
            className={"w-[230px] flex justify-center"}
          />
        </div>
      </section>
      <section>노래</section>
      <section>앨범</section>
    </PagePadding>
  );
};

export default page;
