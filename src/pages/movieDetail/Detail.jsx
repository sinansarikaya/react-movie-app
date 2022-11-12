import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import VideoSection from "../../components/videoSection/VideoSection";
import { Aside, Container, Content, Img } from "./MovieDetail.styled";
import NoImage from "../../assets/No_image.png";

const Detail = () => {
  const [movie, setMovie] = useState([]);
  const [videoKey, setVideoKey] = useState();
  const { id } = useParams();

  const API_KEY = process.env.REACT_APP_thmdbKey;
  const MovieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(MovieDetailBaseUrl)
      .then((res) => res.json())
      .then((data) => setMovie(data));

    fetch(videoUrl)
      .then((res) => res.json())
      .then((data) => setVideoKey(data.results[0].key));
  }, [MovieDetailBaseUrl, videoUrl]);

  const {
    original_title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    release_date,
  } = movie;

  return (
    <Container>
      <Content>
        <Img
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/w1280${poster_path}`
              : NoImage
          }
          alt={movie?.original_title}
        />

        <Aside>
          <div className="title">{original_title}</div>
          <div className="detail">
            <div className="overview">{overview}</div>
            <div>IMDB: {vote_average}</div>
            <div>T{vote_count}</div>
            <div>{release_date}</div>
          </div>
        </Aside>
      </Content>
      {videoKey && <VideoSection videoKey={videoKey} />}
      <Link to={-1}>Go Back</Link>
    </Container>
  );
};

export default Detail;
