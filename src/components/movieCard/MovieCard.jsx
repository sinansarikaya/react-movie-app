import {
  Card,
  CartTitle,
  Img,
  ImgContainer,
  VoteContainer,
} from "./MovieCard.styled";
import { useNavigate } from "react-router-dom";
import NoImage from "../../assets/No_image.png";

const MovieCard = ({ movies }) => {
  const navigate = useNavigate();

  const getVote = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <>
      {movies?.map((movie) => (
        <Card key={movie?.id} onClick={() => navigate(`/detail/${movie?.id}`)}>
          <CartTitle>{movie?.original_title}</CartTitle>
          <ImgContainer>
            <Img
              src={
                movie?.poster_path
                  ? `https://image.tmdb.org/t/p/w1280${movie?.poster_path}`
                  : NoImage
              }
              alt={movie?.original_title}
            />
          </ImgContainer>

          {/* <div>IMDB: {movie?.vote_average}</div> */}
          <VoteContainer>
            <div className={`flex ${getVote(movie?.vote_average.toFixed(1))}`}>
              IMDB: {movie?.vote_average.toFixed(1)}
            </div>
          </VoteContainer>
        </Card>
      ))}
    </>
  );
};

export default MovieCard;
