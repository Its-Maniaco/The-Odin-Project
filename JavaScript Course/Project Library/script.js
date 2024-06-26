const myLibrary = []

function Book({title, author, pages}, read) {
    // construtor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(Book, myLibrary){
    myLibrary.push(Book)
}

function displayBookList2(myLibrary) {
    var table = document.getElementById("Library_Table");  // set this to your table
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

function displayBookList(myLibrary) {
    var table = document.getElementById("Library_Table").getElementsByTagName('tbody')[0]; // Corrected table reference
    table.innerHTML = ''; // Clear existing tbody content

    myLibrary.forEach(book => {
        var row = table.insertRow();
        Object.values(book).forEach(value => {
            var cell = row.insertCell();
            cell.textContent = value;
        });
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