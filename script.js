//data stuctures 
let myLibrary = [];

class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

//const book = new Book(title, author, pages, read);

const addToLibrary = (i) => {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book");
    bookCard.setAttribute("data-index", `${i}`);
  
    const title = document.getElementById("title").value;
    let titleNode = document.createElement("h2");
    titleNode.textContent = `"${title}"`;
  
    const author = document.getElementById("author").value;
    let authorNode = document.createElement("h2");
    authorNode.textContent = `${author}`;
  
    const pages = document.getElementById("pg-count").value;
    let pageNode = document.createElement("h2");
    pageNode.textContent = `${pages} pages`;
  
    const read = document.getElementById("book-read").value;
    let readButton = document.createElement("button");

    if(read.value == "Yes"){
        readButton.textContent = "Read"
        readButton.style.backgroundColor('#AED591')
    }else{
        readButton.textContent = "Not Read"
        readButton.style.backgroundColor('#EA4C46')
    }
  
    let removeButton = document.createElement("button");
    removeButton.classList = "remove";
    removeButton.textContent = `Remove <i class="fas fa-trash-alt">`;

}

//Get elements from HTML using DOM 
const bookForm = document.querySelector('[data-book-form]')
const addButton = document.querySelector('[data-add-button]')
const submitButton = document.querySelector('[data-submit-button]')
const overlay = document.querySelector('[data-overlay]')
const bookshelf = document.querySelector('[data-bookshelf]')
const closeButton = document.querySelector('[data-close-button]')

//open book form funtion 
const openBookForm = () =>{
    bookForm.classList.add('show')
}

addButton.addEventListener('click', ()=>{
    openBookForm()
})

//close book form function
const closeBookForm = () => {
    bookForm.classList.remove('show')
}

closeButton.addEventListener('click', () => {
    closeBookForm()
})

//book form submission
bookForm.addEventListener("submit", (e, i) => {
    e.preventDefault();
    addToLibrary(i);
  });
  