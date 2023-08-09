let libraryArray = [

    {title: "The Lord of The Rings", author: "J.R.R Tolkein", isbn: "1234", synopsis: "You know what this book is about"},
    {title: "Berserk", author: "Kentaro Muira", isbn: "1654", synopsis: "Struggle"},


]

const $title = document.querySelector(`#title`);
const $author = document.querySelector(`#author`);
const $isbn = document.querySelector(`#isbn`);
const $synopsis = document.querySelector(`#synopsis`);
const libList = document.querySelector(`.library-list`);

document.addEventListener(`DOMContentLoaded`, () => {
    render()
})

const submitForm = document.querySelector(`form`).addEventListener("submit", (e) => {
    e.preventDefault();
    addBook();
    render();
});

class Book {
    constructor(title, author, isbn, synopsis) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.synopsis = synopsis;
    }
}

function addBook() {
    if ($title.value.length === 0  || 
        $author.value.length === 0 || 
        $isbn.value.length === 0) 
        {
            alert(`Please Fill out Required Fields`)
        }else{
            const newBook = new Book($title.value, 
                                     $author.value, 
                                     $isbn.value, 
                                     $synopsis.value)

            libraryArray.push(newBook);
            clearForm();
        }
}

function render() {
    libList.innerHTML = ``

    for (let i = 0; i < libraryArray.length; i++) {
        const bookCard = document.createElement(`div`);
        bookCard.classList.add(`book-card`);
        

        bookCard.innerHTML = `<h3>${libraryArray[i].title}</h3>
                              <p>${libraryArray[i].author}</p>
                              <p>${libraryArray[i].isbn}</p> 
                              <p>${libraryArray[i].synopsis}</p>`
                      
        libList.appendChild(bookCard);
    }
    
}

function clearForm() {
    $title.value = ``;
    $author.value = ``;
    $isbn.value = ``;
    $synopsis.value = ``;
}

/*
To Do List:

    [X] make basic JS to create new book objects and add them to local 
    storage

    [] Make "Add Book" seperate form that only appears when 
    brought up by user

    [] Use grid to make book cards, displaying status of books

    
*/