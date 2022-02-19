//Get elements from HTML using DOM 
const bookForm = document.querySelector('[data-book-form]')
const addButton = document.querySelector('[data-add-button]')
const submitButton = document.querySelector('[data-submit-button]')
const overlay = document.querySelector('[data-overlay]')
const bookshelf = document.querySelector('[data-bookshelf]')
const closeButton = document.querySelector('[data-close-button]')



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
  
    const pages = document.getElementById("pg-number").value;
    let pageNode = document.createElement("h2");
    pageNode.textContent = `${pages} pages`;
  
    const read = document.getElementById("book-read").value;
    let readButton = document.createElement("button");
    readButton.classList.add('read-button')

    if(read == "Yes"){
        readButton.textContent = "Read"
        readButton.style.backgroundColor = '#AED591'
    }else if (read == "Not yet"){
        readButton.textContent = "Not Read"
        readButton.style.backgroundColor = '#EA4C46'
    }

    //read button toggle

    readButton.addEventListener('click', () => {
        if(readButton.textContent == "Read"){
            readButton.textContent == "Not read"
            readButton.style.backgroundColor = '#EA4C46'
        }else if(readButton.textContent == "Not read"){
            readButton.textContent == "Read"
            readButton.style.backgroundColor = '#AED591'
        }
    })

  
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";

    //remove book from library 
    removeButton.addEventListener('click', () => {
        bookshelf.removeChild(bookCard);
        myLibrary.splice(bookCard, 1)
    })



    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

    bookCard.appendChild(titleNode);
    bookCard.appendChild(authorNode);
    bookCard.appendChild(pageNode);
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton);

    bookshelf.appendChild(bookCard)

    closeBookForm();
    bookForm.reset();
}

//obtain values from book class

const getUserInput = () => {
    myLibrary.forEach((book, i) => {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book");
        bookCard.setAttribute("data-index", `${i}`);
      
        const title = document.getElementById("title").value;
        let titleNode = document.createElement("h2");
        titleNode.textContent = `"${book.title}"`;
      
        const author = document.getElementById("author").value;
        let authorNode = document.createElement("h2");
        authorNode.textContent = `${book.author}`;
      
        const pages = document.getElementById("pg-number").value;
        let pageNode = document.createElement("h2");
        pageNode.textContent = `${book.pages} pages`;
      
        const read = document.getElementById("book-read").value;
        let readButton = document.createElement("button");
        readButton.classList.add('read-button')

        if(book.read == "Yes"){
            readButton.textContent = "Read"
            readButton.style.backgroundColor = '#AED591'
        }else if (book.read == "Not yet"){
            readButton.textContent = "Not Read"
            readButton.style.backgroundColor = '#EA4C46'
        }

        let removeButton = document.createElement = "button";
        removeButton.classList.add("remove-button");
        removeButton.textContent = "Remove";

        removeButton.addEventListener('click', () => {
            bookshelf.removeChild(bookCard);
            myLibrary.splice(bookCard, 1)
        })
    

        bookCard.appendChild(titleNode);
        bookCard.appendChild(authorNode);
        bookCard.appendChild(pageNode);
        bookCard.appendChild(readButton);
        bookCard.appendChild(removeButton);
        bookshelf.appendChild(bookCard);

    })

}


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
window.addEventListener("load", getUserInput());
bookForm.addEventListener("submit", (e, i) => {
    e.preventDefault();
    addToLibrary(i);
  });


  