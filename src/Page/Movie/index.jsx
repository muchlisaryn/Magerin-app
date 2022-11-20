import Container from "../../component/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../features/MovieSlice.js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MoviePages() {
  const { title } = useParams();
  const dispatch = useDispatch();
  const API_URL = `${process.env.REACT_APP_URL}/movie/?api_key=${process.env.REACT_APP_API_KEY}`;

  const movie = useSelector((state) => state.movie.movie);
  const data = movie.find((item) => item.title === title);

  useEffect(() => {
    dispatch(fetchMovie(API_URL));
  }, []);

  return (
    <Container>
      <div>MOVIE LIST</div>
      <h1>{data.title}</h1>
    </Container>
  );
}
