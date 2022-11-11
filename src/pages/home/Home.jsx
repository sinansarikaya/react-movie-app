import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { Card, CartTitle, Img, Main } from "./Home.styled";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "818efd22848c6c7d63381d1836bac795";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const navigate = useNavigate();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data?.results));
  }, []);

  return (
    <div>
      <Header />
      <Main>
        {movies?.map((movie) => (
          <Card
            key={movie?.id}
            onClick={() => navigate(`/detail/${movie?.id}`)}
          >
            <CartTitle>{movie?.original_title}</CartTitle>

            <Img
              src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`}
              alt={movie?.original_title}
            />
            {/* <div>IMDB: {movie?.vote_average}</div> */}
          </Card>
        ))}
      </Main>
    </div>
  );
};

export default Home;
