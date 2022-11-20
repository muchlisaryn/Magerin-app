import { AiFillStar } from "react-icons/ai";
import MoviePosterSkeleton from "../MoviePosterSkeleton.jsx";
import "./Poster.css";
import { useSelector } from "react-redux";
import defaultImage from "../../../Asset/img/default.jpg";
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";

export default function MoviePoster({ id, img, title, avarage }) {
  const Loading = useSelector((state) => state.movie.isPending);
  const imgURL = "https://image.tmdb.org/t/p/w1280";

  return (
    <>
      {Loading ? (
        <MoviePosterSkeleton />
      ) : (
        <Link to={`/movie/${id}/${title}`}>
          <div
            className="MovieCard position-relative  m-2"
            style={{ width: 200 }}
          >
            <div className="avarage bg-danger position-absolute top-0 start-0 ">
              <div className="d-flex align-items-center ms-1">
                <AiFillStar color="yellow" />
                <span className="ms-1">{avarage}</span>
              </div>
            </div>
            {Loading ? (
              <MoviePosterSkeleton />
            ) : (
              <img
                src={!img ? defaultImage : imgURL + img}
                style={{ width: 200, borderRadius: 10, height: 300 }}
                alt="img"
              />
            )}
            <AiFillPlayCircle
              color="white"
              size={45}
              className="icon-play position-absolute top-50 start-50 translate-middle"
            />
            <div className="title bg-danger  position-absolute bottom-0 start-50 translate-middle-x text-white d-flex justify-content-center p-1">
              <div className="mb-1 text-truncate">{title}</div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
