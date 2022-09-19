// This is express server
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


// let jsonParser = bodyParser.json()
// let urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
const port = 2001;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ****************USERS *********************

// Creating users page and using initial mock data
let mockUsers = [
    { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
    { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
    { id: 3, name: 'Dory', email: 'dory@gmail.com' }
  ];
app.get('/' , (req, res)=> {
    // res.json("Event page")
    res.json({ users: mockUsers });
})

app.post('/', (req,res)=>{
const user = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email
  };
  mockUsers.push(user)
})

// app.get('/:id', (req,res)=>{
//     const id = req.params.id;
//     let newUser;
//     for (let i = 0; i < mockUsers.length; i++) {
//         let newUser = mockUsers[i]
//         if (newUser.id === id) {
//             res.json(mockUsers[i]);
//             return
//         }
//     }
//     res.sendStatus(404)
//     })

app.delete('/:id', (req,res)=>{
    const id = req.params.id;
    console.log(id)
    // remove item from mockUsers
    mockUsers = mockUsers.filter((i) => i.id != id)
    console.log(mockUsers)
    })



// ****************Events *********************

// Creating users page and using initial mock data
let mockEvents = [
    { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
    { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
    { id: 3, name: 'Dory', email: 'dory@gmail.com' }
  ];
app.get('/' , (req, res)=> {
    // res.json("Event page")
    res.json({ users: mockUsers });
})

app.post('/', (req,res)=>{
const user = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email
  };
  mockUsers.push(user)
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
