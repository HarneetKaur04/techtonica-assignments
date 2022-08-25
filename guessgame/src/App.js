import Form from "./components/Form";
import Header from "./components/Header";


function App() {
  const randomNumber = Math.floor(Math.random()*100)
  console.log(randomNumber)


  return (
    <div className="App">
      <Header/>
      <Form secretNumber={randomNumber}/>
      
    </div>
  );
}



export default App;
