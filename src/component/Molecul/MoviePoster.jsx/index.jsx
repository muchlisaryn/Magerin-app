import { AiFillStar } from "react-icons/ai";
import MoviePosterSkeleton from "../MoviePosterSkeleton.jsx";
import "./Poster.css";

export default function MoviePoster({ img, title, avarage }) {
  return (
    <div className="col">
      <div className="position-relative m-2" style={{ width: 200 }}>
        <div className="avarage bg-danger position-absolute top-0 start-0 ">
          <div className="d-flex align-items-center ms-1">
            <AiFillStar color="yellow" />
            <span className="ms-1">{avarage}</span>
          </div>
        </div>
        <div className="position-absolute top-0 end-0">2022</div>
        <img src={img} style={{ width: 200, borderRadius: 10 }} />
        <div className="title bg-danger position-absolute bottom-0 start-50 translate-middle-x text-white d-flex justify-content-center p-1">
          <div className="mb-1 text-truncate">{title}</div>
        </div>
      </div>
    </div>
  );
}
