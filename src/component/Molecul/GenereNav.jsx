import {FaTheaterMasks} from "react-icons/fa"

export default function GenreNav () {
    return (
        <div className="d-flex align-items-center">
        <FaTheaterMasks style={{color : "black"}} size="20"/>
        <div className="fw-semibold ms-2">Genre</div>
        </div>
    )
}