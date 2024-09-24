const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBookToLibrary = (book) => {
    myLibrary.push(book);
};

// Función para ver los libros en pantalla
const bookDisplay = () => {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; 

    if (myLibrary.length > 0) {
        cardContainer.style.display = 'grid';
    } else {
        cardContainer.style.display = 'none'; 
    }

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read}</p>
            <button class="deleteButton" data-index="${index}">X</button>
        `;
        cardContainer.appendChild(card);
    });

    const deleteButtons = document.querySelectorAll('.deleteButton');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            myLibrary.splice(index, 1);
            bookDisplay();
        });
    });
};

// Evento para el formulario
document.getElementById('bookForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    bookDisplay();

    document.getElementById('bookForm').reset();
    document.getElementById('bookForm').style.display = 'none';
    document.querySelector('.header h1').style.display = 'block';
    document.getElementById('addBook').style.display = 'block';
});

// Mostrar el formulario al presionar el botón "Add your book"
document.getElementById('addBook').addEventListener('click', function () {
    document.getElementById('bookForm').style.display = 'flex';
    document.querySelector('.header h1').style.display = 'block';
    document.getElementById('addBook').style.display = 'none';
    document.querySelector('.cardContainer').style.display = 'none';
});