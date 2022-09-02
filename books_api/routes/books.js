import express from 'express';
// import { v4 as uuidv4} from "uuid";
import BOOKS from '../book-api.js'

const router = express.Router();
//defining new variable
let masterBookList = BOOKS;

// //creates an endpoint for the route `/api/books` that prints all the books 

router.get('/', (req, res)=> {
//console.log(masterBookList)
res.json(masterBookList)
})

router.get('/:isbn', (req, res)=> {
    const isbn = req.params.isbn;
    let newBook
    for (let i = 0; i < masterBookList.length; i++) {
        let newBook = masterBookList[i]
        if (newBook.isbn === isbn) {
            res.json(masterBookList[i]);
            return
        }
    }
    res.sendStatus(404)
    })

router.delete('/:isbn', (req, res) => {

    //lines of codes when request is made to endpoint delete
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Remove item from the books array
    masterBookList = masterBookList.filter(i => i.isbn !== isbn) 
    res.send('Book is deleted');

});

// Creating new record of book 
router.post('/' , (req, res)=> {
    const book = req.body;

    // Output the book to the console for debugging
    
    masterBookList.push(book);
    console.log(masterBookList);
    res.send('Book is added to the database')

})

router.post('/:isbn', (req, res) => {

    // Reading isbn from the URL
    const isbn = req.params.isbn;
    console.log(isbn)
    const newBook = req.body;
    console.log(newBook)

    for (let i = 0; i < masterBookList.length; i++) {
        let book = masterBookList[i]
        if (book.isbn === isbn) {
            masterBookList[i] = newBook;
            res.send('Book with' + isbn + ' is edited');
            return
        }
    }
    res.send('Book with' + isbn + ' Not FOUND!!!!');
})

export default router