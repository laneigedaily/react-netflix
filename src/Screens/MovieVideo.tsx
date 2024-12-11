import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieVideo, IGetVideos } from "../api";
import { Container, Iframe } from "../Styles/Video";

export default function MovieVideo() {
  const { movieId } = useParams();
  const { data, isLoading } = useQuery<IGetVideos>({
    queryKey: ["videoInfo", movieId],
    queryFn: getMovieVideo,
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
