import { Card, CartTitle, Img, ImgContainer } from "./MovieCard.styled";
import { useNavigate } from "react-router-dom";
import NoImage from "../../assets/No_image.png";

const MovieCard = ({ movies }) => {
  const navigate = useNavigate();
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
        </Card>
      ))}
    </>
  );
};

export default MovieCard;
