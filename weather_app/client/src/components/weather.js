import React, {useState} from 'react'
import "./weather.css"

const Weather = () => {
    const[input, setInput] = useState("")
    const [weatherData, setWeatherData] = useState({});
    // const [isLoading, setIsLoading] = useState(false);

    const handleInput = (e) => {
        setInput(e.target.value)
    }
     const handleSubmit = (e) => {
        // setIsLoading(true);
        console.log(input)
        if (input == "") {
            console.log("Invalid")
        }
        if (input != ""){
        fetch("http://localhost:9001/weather")
        .then((response) => { 
            if (response.ok) { // Checks server response (if there is one) 
                return response.json();
            } else {
                throw new Error("Bad response");
            }})
        .then((data) => 
            {
                // setIsLoading(false);
                setWeatherData(data);
                console.log(weatherData)
                
            }) 
        }
    }

  return (
    <section className="section">
        <div className="containerweather">
            <h1>Weather App </h1>
            <p>2022-09-06</p>
            <div>
                <input type="text" placeholder="Search city" value={input} onChange= {handleInput}/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
           
            <div>
                <img src="" alt="Clouds"/>
            </div>
            {/* <p>City: {weatherData.name}</p>
            <p>Temp: {weatherData.main.temp}°F</p>
            <p>Temp Range: {weatherData.main.temp_min}°F/ {weatherData.main.temp_max}°F</p>
            <p>Humidity: {weatherData.main.humidity}% </p> */}

            </div>
            
        </div>
        

    </section>
  )
}

export default Weather;