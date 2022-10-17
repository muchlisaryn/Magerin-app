import axios from "axios"
import { useState, useEffect } from "react"
import MoviePoster from "../../component/Molecul/MoviePoster.jsx"
import Navbar from "../../component/Navbar"

export default function LandingPage() {

    const API_URL = `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}`
    const [movie, setMovie] = useState([])
    const imgURL = "https://image.tmdb.org/t/p/w1280"
    

    useEffect(() => {
        axios.get(API_URL)
        .then((Response) => {
            setMovie(Response.data.results) 
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log("==>", movie)

    return (
        <div>
            <Navbar/>
            <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
            {movie.map((list) => 
            <MoviePoster img = {imgURL + list.poster_path} title = {list.title} avarage = {list.vote_average}/>)}
            </div>
        </div>
    )
}