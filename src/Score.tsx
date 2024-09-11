import React from 'react'

function Score({ totalQuestions, score, setIndex }) {
    return (
        <>
            <div className="score_results">
                <div className="image">
                    <img src="./check.svg" alt="" />
                </div>
                <div className="title">
                    <h3>Congratulations</h3>
                    <p>You got {score}/{totalQuestions}</p>
                </div>
                <button className="next_question button" onClick={() => setIndex(0)}>
                    Start Again
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
        </>
    )
}

export default Score
