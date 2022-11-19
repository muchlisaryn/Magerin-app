import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Container from "../../component/Container";
import MoviePoster from "../../component/Molecul/MoviePoster.jsx";
import Navbar from "../../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../features/MovieSlice";

export default function SearchPage() {
  const dispatch = useDispatch();
  const { value } = useParams();
  const API_URL = `${process.env.REACT_APP_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${value}`;
  const imgURL = "https://image.tmdb.org/t/p/w1280";
  const search = useSelector((state) => state.movie.movie);

  useEffect(() => {
    dispatch(fetchMovie(API_URL));
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {search?.map((list) => (
          <MoviePoster
            img={imgURL + list.poster_path}
            title={list.title}
            avarage={list.vote_average}
          />
        ))}
      </Container>
    </>
  );
}
