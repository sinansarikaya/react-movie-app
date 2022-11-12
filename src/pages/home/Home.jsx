import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { Card, CartTitle, Img, Main } from "./Home.styled";
import NoImage from "../../assets/No_image.png";

const API_KEY = process.env.REACT_APP_thmdbKey;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMovies(data?.results));
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  return (
    <div>
      <Header API_KEY={API_KEY} setMovies={setMovies} />
      <Main>
        {movies?.map((movie) => (
          <Card
            key={movie?.id}
            onClick={() => navigate(`/detail/${movie?.id}`)}
          >
            <CartTitle>{movie?.original_title}</CartTitle>

            <Img
              src={
                movie?.poster_path
                  ? `https://image.tmdb.org/t/p/w1280${movie?.poster_path}`
                  : NoImage
              }
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
