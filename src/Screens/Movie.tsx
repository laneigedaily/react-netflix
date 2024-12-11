import { useQuery } from "@tanstack/react-query";
import { getMovieInfo } from "../api";
import { useParams } from "react-router-dom";
import { makeImagePath } from "../Utils";
import MovieVideo from "./MovieVideo";
import { Container, Info, Poster, Title } from "../Styles/Main";

export default function Movie() {
  const { movieId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["movieInfo", movieId],
    queryFn: getMovieInfo,
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
      <MovieVideo />
    </div>
  );
}
