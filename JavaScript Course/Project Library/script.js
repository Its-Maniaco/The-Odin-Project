const myLibrary = []

function Book({title, author, pages}, read) {
    // construtor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBooktToLibrary(Book, myLibrary){
    myLibrary.push(Book)
}

function displayBookList(myLibrary) {
    var table = document.getElementById("Library Table");  // set this to your table
    var tbody = document.createElement("tbody")
    table.append(tbody)

    myLibrary.forEach(book => {
        // create row, create column and fill each column
        var row = document.createElement("tr")
        Object.values(book).forEach(col => {
            var cell = document.createElement("td")
            cell.textContent = col
            row.appendChild(cell)
        })
        table.appendChild(row)
    });

   
    
}


testBook1 = new Book({title: "Book 1", author: "Author 1", pages: 32}, false)
testBook2 = new Book({title: "Book 2", author: "Author 2", pages: 32}, true)
testBook3 = new Book({title: "Book 3", author: "Author 3", pages: 32}, false)
testBook4 = new Book({title: "Book 4", author: "Author 4", pages: 32}, true)

addBooktToLibrary(testBook1, myLibrary)
addBooktToLibrary(testBook2, myLibrary)
addBooktToLibrary(testBook3, myLibrary)
addBooktToLibrary(testBook4, myLibrary)
displayBookList(myLibrary)