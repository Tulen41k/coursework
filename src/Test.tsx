import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Test (){
    return (
        <>
        <h2>Тест о котиках</h2>
        <div className="quiz" id="quiz">
            <div className="quiz-questions" id="questions"></div>

            <div className="quiz-indicator" id="indicator"></div>

            <div className="quiz-results" id="results"></div>

            <div className="quiz-controls">
                <button className="btn-next" id="btn-next" disabled>Далее</button>
                <button className="btn-restart" id="btn-restart">С начала</button>
            </div>
        </div>
        </>
    )
}