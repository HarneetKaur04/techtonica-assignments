import Board from "./components/Board";
import { data } from "./components/data";
import {useState} from 'react'
import Keyboard from "./components/Keyboard";

function App() {
  const [rightAnswer , setRightAnswer] = useState()
  const [isGuessed , setIsGuessed] = useState(false)
  const [key , setKey] = useState("")


  function handlePlay(){
    const randomIndex = Math.floor(Math.random()*data.length)
    let ans = data[randomIndex]
    console.log(ans)
    setRightAnswer(ans)
    setIsGuessed(true)
    
  }

  const apptoKeyBoard = (childdata) => {
   setKey(() => [...childdata, childdata])
  }
  return (
    <div className="App">
      <header className="header">
        <h1>Wordle</h1>
      </header>
      <main className="main">
        <Board guess ={key} word = {rightAnswer} isGuessed = {isGuessed} />
        <Board guess ={key} word = {rightAnswer} isGuessed = {isGuessed} />
        <Board guess ={key} word = {rightAnswer} isGuessed = {isGuessed} />
        <Board guess ={key} word = {rightAnswer} isGuessed = {isGuessed} />
        <Board guess ={key} word = {rightAnswer} isGuessed = {isGuessed} />
        <Board guess ={key} word = {rightAnswer} isGuessed = {isGuessed} />
        <h2>Win/Lose</h2>
        <Keyboard apptoKeyBoard = {apptoKeyBoard}/>
        <button onClick={handlePlay}>Play Game</button>
      </main>
      
    </div>
  );
}

export default App;
