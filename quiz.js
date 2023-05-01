//
// 1. Create a function called getAvailableBooks that returns an array of all available
// books.
// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

// 1. Create a function called getAvailableBooks that returns an array of all available
// books.
// 
const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    ]
    
    function getAvailableBooks(books){
        let empty=[];
        for(i=0;i<books.length;i++){
            empty.push(books[i].title);

        }
        return empty
    }
    getAvailableBooks()

    // / 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

function getBooksByAuthor(books){
    let emptyArray=[];
    for (let j = 0; j < books.length; j++) {
        let sum=0
    for(let i=0;i<books[i].author.length;i++){
    sum+=books[i].author[i]
        
    }
    return emptyArray
}
}
console.log(getBooksByAuthor(books))

// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).

function addNewBook(book){
    let book=new Object()
    book['title']="Better tommorow"
    book['author']="Alan grey"
    book['publicationYear']=1985
    book['isAvailable']=true
}
console.log({book})






