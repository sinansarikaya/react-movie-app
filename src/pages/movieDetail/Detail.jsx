import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import VideoSection from "../../components/videoSection/VideoSection";
import { Aside, Container, Content, Img } from "./MovieDetail.styled";
import NoImage from "../../assets/No_image.png";
import Footer from "../../components/footer/Footer";

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

  <>
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
          <div className="subtitle">
            <p><span className="rate">Rate: {vote_average} </span></p>
            <p><span className="vote">Total Vote: {vote_count}</span></p> 
          </div>
          {videoKey && <VideoSection videoKey={videoKey} />}
          <div className="detail">
            <div className="overview">{overview}</div>
            <div className="date">{release_date}</div>   
          </div>
        </Aside>
      </Content>
      
      <Link to={-1}>Go Back</Link>
    </Container>
    <Footer />
    </>
  );
};

export default Detail;
