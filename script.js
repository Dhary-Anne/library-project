//constructor to store book values

class Book {
    constructor(
      title = 'Unknown',
      author = 'Unknown',
      pages = '0',
      isRead = false
    ) {
      this.title = title
      this.author = author
      this.pages = pages
      this.isRead = isRead
    }
  }
  
//array to store books 
let myLibrary = [];


//
const addButton = document.querySelector(".add-button");
const popUpForm = document.querySelector("#bookForm");
const submitButton = document.querySelector(".submitBook");

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

document.addEventListener('click', (e) => {
    if(e.target.matches('.add-button, #bookForm') == false){
        closeForm()
    }
})

//form submission 
popUpForm.addEventListener('submit', (e) => {
    e.preventDefault();


})

//create book card(s)
