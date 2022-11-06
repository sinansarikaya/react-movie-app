import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Main, Card, Img, CartTitle } from "./Home.styled";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "818efd22848c6c7d63381d1836bac795";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data?.results));
  }, []);

  console.log(movies);

  return (
    <div>
      <Header />
      <Main>
        {movies?.map((movie, i) => (
          <Card key={i}>
            <CartTitle>{movie?.original_title}</CartTitle>

            <Img
              src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
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
