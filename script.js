//constructor to store book values

class Book {
    constructor(
      title = 'Unknown',
      author = 'Unknown',
      pages = '0',
      read = false
    ) {
      this.title = title
      this.author = author
      this.pages = pages
      this.read = read
    }
  }
  
let myLibrary = [];
let newBook;


//
const addButton = document.querySelector(".add-button");
const popUpForm = document.querySelector("#bookForm");
const submitButton = document.querySelector(".submitBook");
const bookLayout = document.querySelector('#bookLayout')

//open and close form 
const openForm = () => {
    popUpForm.classList.add('show')
}

addButton.addEventListener('click', (e) => {
    if(e.target.matches('.add-button')){
       openForm()
    }
})

const closeForm = () => {
    popUpForm.classList.remove('show')
}

//document.addEventListener('click', (e) => {
    //if(e.target.matches('.add-button, #bookForm') === false){
       // closeForm()
//    }
//})

//form submission 
//popUpForm.addEventListener('submit', (e) => {
//    e.preventDefault();
//})


//update book layout 
const updateBookLayout = () => {
    for(let book of myLibrary){
        makeBookCard(book)
    }
}

//reset book layout
const resetLayout = () => {
    bookLayout.innerHTML = ''
}


//create book card 
const makeBookCard = (newBook) => {
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const btns = document.createElement('div')
    const readButton = document.createElement('button')
    const removeButton = document.createElement('button')

    bookCard.classList.add('book-card')
    readButton.classList.add('btns')
    removeButton.classList.ass('btns')

    title.textContent = `"${book.title}"`
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
    removeButton.textContent = 'Remove'

    if(newBook.read === true){
        readButton.textContent = 'Read'
        readButton.style.backgroundColor = '#AED591'
    }else{
        readButton.textContent = 'Not Read'
        readButton.style.backgroundColor = '#ED2939'
    }

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    btns.appendChild(readButton)
    btns.appendChild(readButton)
    bookCard.appendChild(btns)
    bookLayout.appendChild(bookCard)
}


//obtain info from form 
const getUserInput = () => {
    const title = document.getElementById('bookTitle').value
    const author = document.getElementById('bookAuthor').value
    const pages = document.getElementById('pageCount').value
    const read = document.getElementById('readBook').checked
    return new Book(title, author, pages, read)
}




//add book to library 
const addToLibrary = (e) => {
    e.preventDefault()
    const newBook = getUserInput()
    myLibrary.push(newBook)
    updateBookLayout()
}

popUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addToLibrary()
})


