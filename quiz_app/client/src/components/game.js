import React, { useState, useEffect } from 'react'


const Game = ({handleClick, currentQuestion, showScore, score, questions, value}) => {

const answerOptions =  [...questions[currentQuestion].incorrect_answers]
answerOptions.push(questions[currentQuestion].correct_answer)



    
  return (
    <div>
        <h1> Welcome {value.name}</h1>
        <h1>Question {currentQuestion + 1} / {questions.length}</h1>
        <h2> {questions[currentQuestion].question} </h2>
        <section className="answer-section">
            {answerOptions.map((item) => (
              <button onClick={() => handleClick(item)}>
                {item}
              </button>
            ))}
        </section>
    </div> 
  )
}


export default Game;