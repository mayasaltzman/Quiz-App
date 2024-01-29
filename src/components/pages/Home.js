import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
    return (
        <div className='home-body'>
            <h1>University of Guelph Quiz</h1>
            <h2>Can you answer these trivia questions about the University of Guelph?</h2>
            <img id='home-photo' src={process.env.PUBLIC_URL + '/assets/uni-guelph.jpg'} alt='johnston hall from above'></img>
            <Link to = "/Quiz"><button id='start'>Start Quiz</button></Link>
        </div>
    )

}

export default Home
