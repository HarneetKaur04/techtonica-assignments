// This is express server
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
const port = 4444;
app.use(cors());



app.get('/' , (req, res)=> {
    res.json("Let's fetch the data for quiz questions")
})

app.get('/questions' , (req, res)=> {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(data => {
        data.forEach
        res.send(data)
        console.log(data)
    })
        
})


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));