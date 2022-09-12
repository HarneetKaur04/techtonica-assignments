// This is express server
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from "dotenv";
config();

let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
const port = 4444;
app.use(cors());
console.log(process.env.REACT_APP_API)


app.get('/' , (req, res)=> {
    res.json("Hello from Techtonica")
})


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));