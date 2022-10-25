import "../styles/Question.css"
import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import he from "he"

function Question(props) {
    const [stateQuestion, setStateQuestion] = useState(() => {
        const arrayQ = [...props.incorrect_answers, props.correct_answer]
        return arrayQ.sort(() => Math.random() - 0.5)
    })

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5)
    }
    const correctAns = props.correct_answer
    const htmlArray = stateQuestion.map((e, i) => {
        return (
            <div className={props.showResult ? e === props.correct_answer ? "answer correct" : "answer incorrect" : "answer"} key={i}>
                <input 
                    type="radio" 
                    id={`${props.id}${i}`} 
                    name={`${props.id}`} 
                    value={e === correctAns ? true : false}
                    onChange={props.handleChange}
                    disabled={props.showResult ? true : false}/>
                <label htmlFor={`${props.id}${i}`}>{he.decode(e)}</label>
            </div>
            )
    })

    return (
        <div className="question">
            <h2 className="question-title">{he.decode(props.question)}</h2>
            <div className="question-choices">
                {htmlArray}
            </div>
            <hr />
        </div>
    )
}

Question.propTypes = {
    id: PropTypes.number,
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.array,
    handleChange: PropTypes.func,
    showResult: PropTypes.bool
}

export default Question