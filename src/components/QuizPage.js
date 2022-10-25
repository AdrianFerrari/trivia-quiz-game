import "../styles/Question.css"
import Question from "../components/Question.js"
import React, { useState, useEffect } from 'react'
import data from "../data.js"

function QuizPage() {
    const [dataState, setDataState] = useState(() => data.results)
    const [questionStates, setQuestionStates] = useState(() => {
        return dataState.reduce((acc, cur, key) => ({ ...acc, [key]: false}), {}) 
    })
    const [bottomState, setBottomState] = useState(() =>{
        return <button type="submit" onClick={scoreAnswers}>Check answers</button> 
    })

    console.log(questionStates)

    let htmlQuestions = dataState.map((e, i) => {
        return (
            <Question 
                key={i}
                id={i} 
                question={e.question} 
                correct_answer={e.correct_answer} 
                incorrect_answers={e.incorrect_answers}
                handleChange={handleChange} />
        )
    })

    function handleSubmit(event) {
        event.preventDefault()
    }

    function scoreAnswers() {
        let score = 0
        console.log(questionStates)
        for(const answers in questionStates) {
            score = questionStates[answers] ? score + 1 : score
            console.log(questionStates[answers])
        }
        console.log(`score = ${score}`)
        setBottomState(() => {
            return (
                <>
                    <p>You score {score}/{dataState.length} correct answers</p>
                    <button>Play again</button>
                </>
            )
        })
    }

    function handleChange(event) {
        let value = (event.target.value === 'true')
        let name = event.target.name
        setQuestionStates(prevScore => ({...prevScore, [name]:value}))
        console.log(questionStates)
    }

    return (
        <form className="quiz-page" onSubmit={handleSubmit}>
            {htmlQuestions}
            <div className="bottom-section">
                {bottomState}
            </div>
        </form>
    )
}

export default QuizPage