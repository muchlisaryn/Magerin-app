import Container from "../../component/Container";
import { useDispatch, useSelector } from "react-redux";

export default function Trending() {
  const dispatch = useDispatch();
  const API_URL = `${process.env.REACT_APP_URL}/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&year=${date}`;

  const trending = useSelector((state) => state.movie.movie);

  useEffect(() => {
    dispatch(fetchMovie(API_URL));
  }, []);

  return (
    <>
      <Container>
        <MoviePoster
          img={list.poster_path}
          title={list.title}
          avarage={list.vote_average}
        />
      </Container>
    </>
  );
}
