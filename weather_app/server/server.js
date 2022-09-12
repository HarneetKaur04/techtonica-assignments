// This is express server
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from "dotenv";
config();

let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
const port = 9001;
app.use(cors());
console.log(process.env.REACT_APP_API)


app.get('/' , (req, res)=> {
    res.json("Hello from Techtonica")
})

const url = "https://api.openweathermap.org/data/2.5/"
app.get('/input/:query' , (req, res)=> {
    const cityName = req.params.query
    console.log("body", cityName)
    console.log("body", typeof(cityName))
    fetch(`${url}weather?q=${cityName}&APPID=${process.env.REACT_APP_API}&units=imperial`)
    // console.log(fetch)
    .then((response) => { 
        if (response.ok) { // Checks server response (if there is one) 
            return response.json();
        } else {
            res.send("Wrong city")
        }})
    .then(data => 
        {
            console.log(data)
            res.send(data)
        })     

})

const urlForecast = "https://api.openweathermap.org/data/2.5/"
app.get('/forecast', (req,res)=> {
    fetch(`${urlForecast}forecast/?q=london&APPID=${process.env.REACT_APP_API}&units=imperial`)
    // console.log(fetch)
    .then((response) => { 
        if (response.ok) { // Checks server response (if there is one) 
            return response.json();
        } else {
            throw new Error("Bad response");
        }})
    .then(data => 
        {
            console.log(data)
            res.send(data)
        }) 
})



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));