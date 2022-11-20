import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MoviePoster from "../../../component/Molecul/MoviePoster.jsx";
import { useState } from "react";
import axios from "axios";

export default function TrendingPages() {
  const dispatch = useDispatch();
  const API_URL = `${process.env.REACT_APP_URL}/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`;

  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setTrending(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between">
        <div>Trending</div>
        <Link to="/trending">See all</Link>
      </div>
      {trending?.slice(0, 6).map((list) => (
        <MoviePoster
          img={list.poster_path}
          title={list.title}
          avarage={list.vote_average}
        />
      ))}
    </>
  );
}
