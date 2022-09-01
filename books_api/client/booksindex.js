//This function load your books from your backend into the FrontEnd. It must do another GEt request. 
// Used DOM Manipulation here


// showing books
async function showBooks(){
    const URL = "http://127.0.0.1:8080/api/books"
    const response = await fetch(URL);
    const responseBooks = await response.json();
    console.log(responseBooks)
    for (let book of responseBooks){
    const tempCard = `<div class="col-4">
    <div class="card">
        <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>
        <div>Author: ${book.author}</div> 
        <div>Format: ${book.format}</div>
        <hr>

            <button type="button" class="btn btn-danger" onClick="deleteBook('${book.isbn}')">Delete</button>
            <button types="button" class="btn btn-primary" data-toggle="modal"  data-target="#editBookModal" onClick="editBook('${book.isbn}')">
            Edit
            </button>
        </div>
    </div>
</div>`
document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + tempCard;
}
}


showBooks()

// fetch can do delete
// User deleting a book record
// change html to have a button for delete
async function deleteBook(isbn){
    // console.log(isbn)
    const URL = "http://127.0.0.1:8080/api/books"
    const response = await fetch(URL + "/" + isbn, {method: 'DELETE'});
    // console.log(response)
    location.reload()

}

// User editing a book record. create a form with same info so user can edit

async function editBook(isbn){
    const URL = "http://127.0.0.1:8080/api/books"
    const response = await fetch(URL + "/" + isbn, {method: 'GET'});
    const book = await response.json();
    console.log(book)
    const {
        author,
        format,
        title
    } = book;

    // Filling information about the book in the form inside the modal
    document.getElementById('isbn').value = isbn;
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;
    document.getElementById('format').value = format;

    // Setting up the action url for the book
    document.getElementById('editForm').action = `http://localhost:8080/api/books/${isbn}`
    
}




