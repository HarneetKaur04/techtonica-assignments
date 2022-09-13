import './index.css';
import Slideshow from "./components/slideshow.js"
import UserForm from "./components/userform.js"
import Game from "./components/game.js"
import  { useState, useEffect } from 'react'


function App(){
  const [user, setUser] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState(null)
  
let dataImported = () => {

    fetch("http://localhost:4444/questions")
    .then(res => res.json())
    .then((data) => {
        setQuestions(data.results)
        console.log(data.results)
        
    }
    )
}

useEffect(() => {
    dataImported();
}, [])


  const handleUser = (text) =>{
    setUser(text);
  }

  const handleClick=(correct_answer)=>{
        if (correct_answer == questions[currentQuestion].correct_answer ) {
          setScore(score + 1);
        }
    
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowScore(true);
        }

}
  
  return (
    <div className="App">
      <header className="App-header">
        <Slideshow />
        {!user? <UserForm grabUser={handleUser} /> : null}
        {showScore? (<><p>You score is {score}</p>  <button className="next-btn" type="submit" onClick={()=> window.location.reload(false)}>Play Again</button></>) : user && questions ? <Game handleClick={handleClick} currentQuestion ={currentQuestion} user={user} showScore={showScore} score={score} questions={questions} /> : null}

  
      </header>
    </div>
  );
}

export default App;
