import React, { useState } from 'react'

export default function Form(props) {
    let displayMessage = "Guess the Number and input it above"
    const [display, setDisplay] = useState(displayMessage)
    const [answer, setAnswer] = useState("")
    const [wrongGuess, setWrongGuess] = useState(false)
    const [count, setCount] = useState(0)
    const [list, setList] = useState([])


    function handleClick(){
        if(answer != NaN){
            setDisplay("Please enter a valid Number")
        }
        if(answer == props.secretNumber){
            setDisplay("You got it!")
            setWrongGuess(false)
            setCount((prev)=> prev)
            setList(list => [...list])
        } 
        if (answer < props.secretNumber){
            setDisplay("Lower than number!")
            setWrongGuess(true)
            setCount((prev)=> prev + 1)
            setList(list => [...list, answer])
        } 
        if (answer > props.secretNumber){
            setDisplay("Higher than number!")
            setWrongGuess(true)
            setCount((prev)=> prev + 1)
            setList(list => [...list, answer])
        }
       
    }
  return (
    <div className="form">
        <input value={answer} onChange={(e)=> setAnswer(e.target.value)} className="form-input" type="text" placeholder="Type your input here" name="formName"/>
        <button onClick={handleClick} className='w3-button w3-pale-blue'>Guess</button>
        <p style={{color: wrongGuess ? 'red' : 'green'}}>{display}</p>
        <p className='para'>{wrongGuess? `No. of Wrong Guesses: ${count}`: ""}</p>
        <p className='para'>{wrongGuess? `List of Wrong Guesses: ${list}`: ""}</p>


    </div>
  )
}
