import React, {useState} from 'react'
import "./weather.css"


const Weather = ({values}) => {
    let today = new Date();
    let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    const[input, setInput] = useState("")
    const [weatherData, setWeatherData] = useState(null);

    // console.log(weatherData)

    const handleInput =  (e) => {
        setInput(e.target.value)
    }
    
    const handleSubmitButton =  (e) => {
        if (input === "") {
            console.log("please input a city")
        } 
        if (input != ""){
        e.preventDefault();

        // setIsLoading(true);
       
        fetch("http://localhost:9001/weather")
        .then((response) => { 
            if (response.ok) { // Checks server response (if there is one) 
                return response.json();
            } else {
                throw new Error("Bad response");
            }})
        .then((data) => 
            {
                setWeatherData(data);
                console.log(input)
                console.log(data)
                setInput("")
            }) 

    
       
    }
}

// console.log(weatherData)
  return (
    <section className="section">
        <div className="containerweather">
            <h1>Weather App </h1>
            <p>{date}</p>
            <div>
                <form onSubmit={handleSubmitButton} >
                    <input type="text" placeholder="Search city" value={input} onChange= {handleInput}/>
                    <input type="submit" value="Submit" onSubmit={handleSubmitButton} />
                </form>
            </div>
            { weatherData ? weatherData  === "404" ? (
                `The city of ${input} is not valid: Enter a valid city`
            ) : (
                <>
                <div>
                <img src={`/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].main}/>
                </div>
                <div>
                    <p style={{color: "blue", fontSize: 20, }}>City: {weatherData.name}</p>
                    <p>Temp: {weatherData.main.temp}°F</p>
                    <p>Weather: {weatherData.weather[0].main}</p>
                    <p>Temp Range: {weatherData.main.temp_min}°F/ {weatherData.main.temp_max}°F</p>
                    <p>Humidity: {weatherData.main.humidity}% </p> 
                </div>
                </>
            ) : (
                <p>Please enter the city name</p>
                )
            }
            
        </div>
        
    </section>
)}
    


export default Weather;