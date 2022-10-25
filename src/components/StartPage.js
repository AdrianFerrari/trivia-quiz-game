import "../styles/StartPage.css"
import React from 'react'
import { PropTypes } from 'prop-types'

function StartPage(props) {
    return (
        <div className="start-page">
            <h1>Quizzical</h1>
            <p>Test you knowdlege on science, entretainment, history and more</p>
            <button onClick={props.togglePage}>Start Quiz</button>
        </div>
    )
}

StartPage.propTypes = {
    togglePage: PropTypes.func
}

export default StartPage