import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const QuizInstruction = () => (
    <Fragment>
        <Helmet><title>Quiz | Instruction</title></Helmet>
        <div className="instructions container">
            <h1>How to take Quiz</h1>
            <p>Ensure you read this guide before you take the quiz</p>
            <ul className='browser-default' id='main-list'>
                <li>The Quiz has a duration of 15 minutes and ends as soon as your time elapses.</li>
                <li>Each Quiz consists of 15 questions</li>
                <li>Each Quiz has 2 lifelines</li>
                <li>
                    Choosing a 50-50 lifeline by clicking the icon by top left of the page
                    <span className='mdi mdi-set-center mdi-24px lifeline-icon'></span>
                </li>
            </ul>
            <div>
                <span className="left"><Link to="/">No take me back</Link></span>
                <span className="right"><Link to="/take/quiz">Okay, Let's do this!</Link></span>
            </div>
        </div>
    </Fragment>
);

export default QuizInstruction;