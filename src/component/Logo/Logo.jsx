import './Logo.css'
import { Link } from 'react-router-dom'

export default function Logo () {
    return (
        <>
        <Link to="/" style={{textDecoration: 'none'}}><img alt="logo" src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/logo.png?alt=media&token=264a0067-4eb1-4b07-af78-ec960091b80f"  /></Link>
        </>
    )}