import {GiEarthAmerica} from "react-icons/gi"

export default function CountryNav () {
    return (
        <div className="d-flex align-items-center">
        <GiEarthAmerica style={{color : "black"}} size="20"/>
        <div className="fw-semibold ms-2">Negara</div>
        </div>
    )
}