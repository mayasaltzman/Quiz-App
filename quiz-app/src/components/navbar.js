import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css"

function navbar() {
    return (
        <nav>
            <Link to="/" className="title">Home</Link>
        </nav>
    )
}

export default navbar
