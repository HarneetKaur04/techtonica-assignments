import Weather from './components/weather.js'
import Form from './components/form.js'
import React, {useState} from "react";

const options = ["Current Weather", "Forecast"]

function App() {

  const [values, setValues] = useState({firstName: '',email: '', options: ''});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setValues((preValues) => ({
      ...preValues,
      [e.target.name]: e.target.value
    }));
  }
const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

}


  return (
    <div className="App">
      <Form 
      values={values}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      submitted={submitted}
      options={options}
      />
      
    </div>
  );
}

export default App;
