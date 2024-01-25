import React, { useState } from 'react'
import "./Quiz.css"

function Quiz() {
    const [getResults, setResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // array of questions
    const questions = [
        {
            text: "What is the University of Guelph's mascot?",
            options: [
                { id: 0, text: "Gryphon", isCorrect: true },
                { id: 1, text: "Lion", isCorrect: false },
                { id: 2, text: "Husky", isCorrect: false },
                { id: 3, text: "Panther", isCorrect: false },
            ]

        },
        {
            text: "What year was Johnston Hall built?",
            options: [
                { id: 0, text: "1908", isCorrect: false },
                { id: 1, text: "1951", isCorrect: false },
                { id: 2, text: "1932", isCorrect: true },
                { id: 3, text: "1927", isCorrect: false },
            ]
        },
        {
            text: "Who is the President of the University of Guelph?",
            options: [
                { id: 0, text: "Gwen Chapman", isCorrect: false },
                { id: 1, text: "Dr. Charlotte Yates", isCorrect: true },
                { id: 2, text: "Sharmilla Rasheed", isCorrect: false },
                { id: 3, text: "Rene Van Acker", isCorrect: false },
            ]
        },
        {
            text: "How many acres is the Arboretum?",
            options: [
                { id: 0, text: "400 acres", isCorrect: true },
                { id: 1, text: "80 acres", isCorrect: false },
                { id: 2, text: "700 acres", isCorrect: false },
                { id: 3, text: "100 acres", isCorrect: false },
            ]
        },
        {
            text: "What is the oldest building on the University of Guelph Campus?",
            options: [
                { id: 0, text: "Drew Hall", isCorrect: false },
                { id: 1, text: "Mills Hall", isCorrect: false },
                { id: 2, text: "Alumni House", isCorrect: true },
                { id: 3, text: "Bullring", isCorrect: false },
            ]
        }
    ]

    //helper functions to switch from question to question
    // presses next question
    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
    }

    //presses previous questions
    const previousQuestion = () => {
        setCurrentQuestion(currentQuestion - 1)
    }

    //presses prev question

    //helper function to store if question is correct
    const optionClicked = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
    }

    //helper function to end game if user wants to finish quiz

    return (
        <div id='body'>
            <h1>University of Guelph Quiz</h1>

            <h2>Time Elapsed</h2>

            {/* questions */}
            <div className='question-card'>

                <div className='questions'>
                    {/* dyncamically get questions based on array of questions and opject */}
                    <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
                    <h3 className='question-text'>{questions[currentQuestion].text}</h3>
                    <ul>
                        {/* map current question to the options for that questio  */}
                        {questions[currentQuestion].options.map((option) => {
                            return (
                                <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                            );
                        })}
                    </ul>
                    <button onClick={() => previousQuestion()}>Previous</button>
                    <button onClick={() => nextQuestion()}>Next</button>
                    <button>Finish</button>
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
