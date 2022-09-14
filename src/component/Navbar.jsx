import { Link } from "react-router-dom"
import Logo from "./Logo/Logo"
import CountryNav from "./Molecul/CountryNav"
import GenreNav from "./Molecul/GenereNav"
import HomeNav from "./Molecul/Home"
import MovieNav from "./Molecul/MoviesNav"
import YearNav from "./Molecul/YearNav"

export default function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <Logo/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="#"><HomeNav/></Link>
                    </li>
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#"><MovieNav/></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#"><GenreNav/></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#"><CountryNav/></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#"><YearNav/></Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
    )
}