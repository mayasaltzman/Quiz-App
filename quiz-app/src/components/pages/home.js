import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>University of Guelph Quiz App</h1>
            <Link to = "/Quiz"><button>Start Quiz</button></Link>
        </div>
    )

}

export default Home
