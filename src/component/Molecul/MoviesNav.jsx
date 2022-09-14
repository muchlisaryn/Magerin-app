import {MdLocalMovies} from "react-icons/md"

export default function MovieNav () {
    return (
        <div className="d-flex align-items-center">
        <MdLocalMovies style={{color : "black"}} size="20"/>
        <div className="fw-semibold ms-2">Movies</div>
        </div>
    )
}