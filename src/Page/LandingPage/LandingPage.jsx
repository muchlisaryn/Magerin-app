import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../component/Container/index.jsx";
import MoviePoster from "../../component/Molecul/MoviePoster.jsx";
import Navbar from "../../component/Navbar";
import { fetchMovie } from "../../features/MovieSlice.js";

const date = new Date();

export default function LandingPage() {
  const dispatch = useDispatch();
  const API_URL = `${process.env.REACT_APP_URL}/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&year=${date}`;
  const imgURL = "https://image.tmdb.org/t/p/w1280";

  const discovery = useSelector((state) => state.movie.movie);

  useEffect(() => {
    dispatch(fetchMovie(API_URL));
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        {discovery.map((list) => (
          <MoviePoster
            img={imgURL + list.poster_path}
            title={list.title}
            avarage={list.vote_average}
          />
        ))}
      </Container>
    </div>
  );
}
