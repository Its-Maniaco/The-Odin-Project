const myLibrary = []

function Book({title, author, pages}, read) {
    // construtor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// add `Book` to library
function addBookToLibrary(Book, myLibrary){
    myLibrary.push(Book)
}

// delete book from myLibrary
function deleteBook(row, ind) {
    // cell to add delete
    const deleteCell = row.insertCell();
    
    // add a delete button(element) and attach eventlistner to it
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        // user confirmatiion
        if (confirm("Confirm?")) {
            myLibrary.splice(ind, 1)
            displayBookList(myLibrary)
        }
    });

    deleteCell.appendChild(deleteBtn);
}

function displayBookList(myLibrary) {
    // display books
    const table = document.getElementById("Library_Table").getElementsByTagName('tbody')[0];
    table.innerHTML = ''; // Clear existing tbody content

    myLibrary.forEach((book, ind) => {
        const row = table.insertRow();
        Object.values(book).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
        
        // delete button functionality
        deleteBook(row, ind)
    });
}

const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("add-book-dialog");
const jsCloseBtn = document.getElementById("js-close");
const addBookForm = document.getElementById("add-book");

showBtn.addEventListener("click", () => {
    console.log("Modal opened")
    dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const book = new Book({ title, author, pages }, read);

    addBookToLibrary(book, myLibrary);
    displayBookList(myLibrary);
    dialog.close();
});