import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTvInfo } from "../api";
import { makeImagePath } from "../Utils";
import TvVideo from "./TvVideo";
import { Container, Info, Poster, Title } from "../Styles/Main";

export default function TvDetail() {
  const { tvId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["tvInfo", tvId],
    queryFn: getTvInfo,
  });
  return (
    <div>
      <Container>
        <Poster src={makeImagePath(data?.poster_path || "")} />
        <Info>
          <Title>{data?.original_title}</Title>
          <h3>⭐️{data?.vote_average.toFixed(1)}</h3>
          <p>{data?.overview}</p>
        </Info>
      </Container>
      <TvVideo />
    </div>
  );
}
