import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css"

function navbar() {
    return (
        // nav bar with just home button that will take you back to home page if you want to quiz quiz
        <nav>
            <Link to="/" className="title">Home</Link>
        </nav>
    )
}

export default navbar
