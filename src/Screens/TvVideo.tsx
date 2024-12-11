import { useParams } from "react-router-dom";
import { getTvVideo, IGetVideos } from "../api";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { Container, Iframe } from "../Styles/Video";

export default function TvVideo() {
  const { tvId } = useParams();
  const { data, isLoading } = useQuery<IGetVideos>({
    queryKey: ["videoInfo", tvId],
    queryFn: getTvVideo,
  });
  return (
    <Container>
      {data?.results.map((video) => (
        <Iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
        />
      ))}
    </Container>
  );
}
