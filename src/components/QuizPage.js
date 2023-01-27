import "../styles/Question.css"
import Question from "../components/Question.js"
import React, { useState, useEffect } from 'react'
import data from "../data.js"

function QuizPage() {
    const [dataState, setDataState] = useState([])
    const [questionStates, setQuestionStates] = useState({})
    const [showResult, setShowResult] = useState(false)
    const [finalScore, setFinalScore] = useState(0)
    const [reset, setReset] = useState(false)

    

    useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple&difficulty=easy')
        .then((response) => response.json())
        .then((data) => {
            setDataState(() => data.results)
            setQuestionStates(() => {
                return dataState.reduce((acc, cur, key) => ({ ...acc, [key]: false}), {}) 
            })
            return true
        })
      }, [reset])



    let htmlQuestions = dataState.map((e, i) => {
        return (
            <Question 
                key={i}
                id={i} 
                question={e.question} 
                correct_answer={e.correct_answer} 
                incorrect_answers={e.incorrect_answers}
                handleChange={handleChange}
                showResult={showResult} />
        )
    })


    function handleSubmit(event) {
        event.preventDefault()
    }

    function scoreAnswers() {
        for(const answers in questionStates) {
            setFinalScore(prevCount => questionStates[answers] ? prevCount + 1 : prevCount)
        }
        setShowResult(true)
    }

    function handleChange(event) {
        let value = (event.target.value === 'true')
        let name = event.target.name
        setQuestionStates(prevScore => ({...prevScore, [name]:value}))
    }

    function playAgain() {
        setDataState([])
        setQuestionStates({})
        setShowResult(false)
        setFinalScore(0)
        setReset(last => !last)
    }

    return (
        <form className="quiz-page" onSubmit={handleSubmit}>
            {htmlQuestions}
            <div className="bottom-section">
                {showResult ? (
                    <>
                        <p>You score {finalScore}/{dataState.length} correct answers</p>
                        <button onClick={playAgain}>Play again</button>
                    </>
                ) : (
                    <button type="submit" onClick={scoreAnswers}>Check answers</button>
                )}
            </div>
        </form>
    )
}

export default QuizPage