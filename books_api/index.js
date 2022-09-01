// This is express server
import express from 'express';
import cors from 'cors';
import routes from './routes/books.js'
import bodyParser from 'body-parser';
import path from 'path'; // need to know


const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/books' , routes)

const __dirname = path.resolve();
app.use(express.static('client'));


//homepage get message
app.get('/', (req, res) => {
    res.send('Hello World, from express');
    // open index.html file that is in client directory
    res.sendFile(path.join(__dirname, 'client', 'index.html'))
})


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));