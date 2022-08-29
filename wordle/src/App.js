import Board from "./components/Board";
import { words } from "./components/data";
import {useState} from 'react'
import Keyboard from "./components/Keyboard";


function App() {
  const [rightAnswer , setRightAnswer] = useState()
  const [isGuessed , setIsGuessed] = useState(false)
  const [data , setData] = useState([])

// useEffect(()=> {
//  if (data.length === 0){
//   handlePlay()
//  }
// }, []
// )
  function handlePlay(){
    const randomIndex = Math.floor(Math.random()*words.length)
    let ans = words[randomIndex]
    console.log(ans)
    setRightAnswer(ans)
    
    setData("")
    
  }

  function enter(){
    setIsGuessed(true)
    
  }

  const apptoKeyBoard = (key) => {
    console.log("***keys" , key)
   setData([...data, key])
   console.log("***SetKey", [...key,key])
  }
  return (
    <div className="App">
      <header className="header">
        <h1>Wordle</h1>
      </header>
      <main className="main">
        <Board guess ={data} word = {rightAnswer} isGuessed = {isGuessed} />
        
        <h2> Win/Lose</h2>
        <Keyboard apptoKeyBoard = {apptoKeyBoard} />
        <div className="line4">
          <div className='enter' onClick={enter}>Enter</div>
          <div className='backspace'>Backspace</div>
        </div>
        <button onClick={handlePlay}>Play Game</button>
      </main>
      
    </div>
  );
}

export default App;
