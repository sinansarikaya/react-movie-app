import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Aside, Container, Content, Img } from "./MovieDetail.styled";

const Detail = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams(); 

  const API_KEY = "818efd22848c6c7d63381d1836bac795";
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [url]);

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
      <Content>
        <Img
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          alt={original_title}
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

      <Link to={-1}>Go Back</Link>
    </Container>
  );
};

export default Detail;
