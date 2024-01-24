import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>University of Guelph Quiz</h1>
            <h2>Can you answer these trivia questions about the University of Guelph?</h2>
            <Link to = "/Quiz"><button>Start Quiz</button></Link>
        </div>
    )

}

export default Home
