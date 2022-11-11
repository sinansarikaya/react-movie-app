import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./MovieDetail.styled";

const Detail = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const API_KEY = "818efd22848c6c7d63381d1836bac795";
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);

  console.log(movie);

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
      <div>{original_title}</div>
      <img
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt={original_title}
      />
      <div>{overview}</div>
      <div>{vote_average}</div>
      <div>{vote_count}</div>
      <div>{release_date}</div>
      <a onClick={() => navigate(-1)}>Go Back</a>
    </Container>
  );
};

export default Detail;
