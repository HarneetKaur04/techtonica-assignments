// This is express server
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from "./db/db-connection.js";


// let jsonParser = bodyParser.json()
// let urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
const port = 2001;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ****************USERS *********************

// Creating users end-point and fetching data from database
app.get('/' , async(req, res)=> {
    // res.json({ users: mockUsers });
    try {
        const users = await db.any('SELECT * FROM users');
        res.send(users);
      } catch (e) {
        return res.status(400).json({ e });
      }
})

app.post('/', async(req,res)=>{
const user = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email
  };

  try {
    const createdUser = await db.one(
      'INSERT INTO users(name, email, id) VALUES($1, $2, $3) RETURNING *',
      [user.name, user.email, user.id]
    );
    console.log(createdUser);
    res.send(createdUser);
  } catch (e) {
    return res.status(400).json({ e });
  }
})

app.delete('/:id', async(req,res)=>{
    // : acts as a placeholder
    const userId = req.params.id;
    try {
    await db.none("DELETE FROM users WHERE id=$1", [userId]);
    res.send({ status: "success" });
    } catch (e) {
    return res.status(400).json({ e });
    }
    })



// ****************Events *********************

// Creating users page and using initial mock data
app.get('/events' , async(req, res)=> {
    // res.json("Event page")
    try{
        const events = await db.any('SELECT * FROM events');
        res.send(events);
      } catch (e) {
        return res.status(400).json({ e });
    }
})

app.post('/events', async(req,res)=>{
const newEvent = {
    id: req.body.id,
    name: req.body.name,
    date: req.body.date,
    description: req.body.description,
    category: req.body.category
  };
  try {
    const createdEvent = await db.one(
      'INSERT INTO events(name, date, description, category) VALUES($1, $2, $3 , $4) RETURNING *',
      [newEvent.name, newEvent.date, newEvent.description, newEvent.category]
    );
    console.log(createdEvent);
    res.send(createdEvent);
  } catch (e) {
    return res.status(400).json({ e });
  }
})

app.delete('/events/:id', async(req,res)=>{
    const eventid = req.params.id;
    console.log(eventid)
    try {
        await db.none("DELETE FROM events WHERE id=$1", [eventid]);
        res.send({ status: "success" });
        } catch (e) {
        return res.status(400).json({ e });
        }
    })

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
