// This is express server
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
const port = 4002;
app.use(cors());



app.get('/' , (req, res)=> {
    res.json("Let's fetch the data for quiz questions")
})


// app.get("/convertedAmount*", (req, res)=>{
//     console.log(req.query.primaryCurrency);
//     console.log(req.query.secondaryCurrency);
//     console.log(req.query.primaryCurrencyAmount);
// });

app.get('/questions' , (req, res)=> {

    console.log("Amount" , req.query.amount)

    const params = new URLSearchParams({
        amount: req.query.amount,
        category: req.query.category,
        difficulty: "easy",
        type: "multiple"
    })
   console.log(`https://opentdb.com/api.php?${params}`)
    fetch(`https://opentdb.com/api.php?${params}`)
    .then(res => res.json())
    .then(data => {
        data.forEach
        res.send(data)
        console.log(data)
    })
  
})


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));