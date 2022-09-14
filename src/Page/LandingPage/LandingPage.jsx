import axios from "axios"
import { useState, useEffect } from "react"
import Navbar from "../../component/Navbar"

export default function LandingPage() {

    const API_URL = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`
    const [movie, setMovie] = useState([])

    console.log(process.env.REACT_APP_API_KEY)
    useEffect(() => {
        axios.get(`${API_URL}`, {
    }).then((Response) => {
            console.log("response ==>", Response.data)
            setMovie(Response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <Navbar/>
        </div>
    )
}