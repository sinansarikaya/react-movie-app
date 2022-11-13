import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Main } from "./Home.styled";
import Footer from "../../components/footer/Footer";
import MovieCard from "../../components/movieCard/MovieCard";

const API_KEY = process.env.REACT_APP_thmdbKey;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const Home = () => {
  const [movies, setMovies] = useState([]);

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
        <MovieCard movies={movies} />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
