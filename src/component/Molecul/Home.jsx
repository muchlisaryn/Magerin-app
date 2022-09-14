import {FaHome} from "react-icons/fa"

export default function HomeNav () {
    return (
       <div className="d-flex align-items-center">
            <FaHome style={{color : "black"}} size="20"/>
            <div className="fw-semibold ms-2">Home</div>
       </div>
    )
}