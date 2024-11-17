import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongCardRowExpand from "@/components/SongCardRowExpand";
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
            <WhiteButton label={"셔플"} icon={<FiShuffle size={16} />} />
            <WhiteButton label={"뮤직 스테이션"} icon={<FiMusic size={16} />} />
          </div>
        </article>
        <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
          <WhiteButton label={"셔플"} icon={<FiShuffle size={16} />} />
          <WhiteButton label={"뮤직 스테이션"} icon={<FiMusic size={16} />} />
          <DarkButton
            label={"구독중 4.18만"}
            className={"w-[230px] flex justify-center"}
          />
        </div>
      </section>
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">노래</div>
        <div className="mt-[20px]">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, idx) => {
              return <SongCardRowExpand song={song} key={idx} />;
            })}
          </ul>
        </div>
      </section>
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">앨범</div>
        <PlayListCarousel playlistArray={channel.playlistArray} />
      </section>
      <section className="mt-[80px]"></section>
    </PagePadding>
  );
};

export default page;
