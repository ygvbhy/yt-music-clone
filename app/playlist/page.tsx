import { getPlaylistById } from "@/lib/dummyData";
import React from "react";

interface PlaylistPageProps {
  searchParams: {
    list: string;
  };
}

const page = async (props: PlaylistPageProps) => {
  const playlistId = await getPlaylistById(+props.searchParams.list);

  return <div>playlist / [{props.searchParams.list}]</div>;
};

export default page;
