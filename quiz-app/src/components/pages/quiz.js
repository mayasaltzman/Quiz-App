import React, { useState } from 'react'
import "./Quiz.css"

function Quiz() {
    const [getResults, setResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // make array of questions here
    return (
        <div id='body'>
            <h1>University of Guelph Quiz</h1>

            <h2>Time Elapsed</h2>

            {/* questions */}
            <div className='question-card'>
                <div className='questions'>
                    {/* question 1 */}
                    <h2>Question 1 out of 5</h2>
                    <h3>What is the University of Guelph's mascot?</h3>
                    <ul>
                        {/* correct answer */}
                        <li>Gryphon</li>
                        <li>Lion</li>
                        <li>Husky</li>
                        <li>Panther</li>
                    </ul>
                </div>

                <div className='questions'>
                    {/* question 2 */}
                    <h2>Question 2 out of 5</h2>
                    <h3>What year was Johnston Hall built?</h3>
                    <ul>
                        <li>1908</li>
                        <li>1951</li>
                        {/* correct answer */}
                        <li>1932</li>
                        <li>1927</li>
                    </ul>
                </div>

                <div className='questions'>
                    {/* question 3 */}
                    <h2>Question 3 out of 5</h2>
                    <h3>Who is the President of the University of Guelph?</h3>
                    <ul>
                        <li>Gwen Chapman</li>
                        {/* correct answer */}
                        <li>Dr. Charlotte Yates</li>
                        <li>Sharmilla Rasheed</li>
                        <li>Rene Van Acker</li>
                    </ul>

                </div>

                <div className='questions'>
                    {/* question 4 */}
                    <h2>Question 4 out of 5</h2>
                    <h3>How many acres is the Arboretum?</h3>
                    <ul>
                        {/* correct answer */}
                        <li>400 acres</li>
                        <li>80 acres</li>
                        <li>700 acres</li>
                        <li>100 acres</li>
                    </ul>
                </div>

                <div className='questions'>
                    {/* question 5 */}
                    <h2>Question 5 out of 5</h2>
                    <h3>What is the oldest building on the University of Guelph Campus?</h3>
                    <ul>

                        <li>Drew Hall</li>
                        <li>Mills Hall</li>
                        {/* correct answer */}
                        <li>Alumni House</li>
                        <li>Bullring</li>
                    </ul>
                </div>


            </div>

            <div className='results'>
                <h2>Your results</h2>
                <button>Restart Quiz</button>
            </div>


        </div>
    )
}

export default Quiz
