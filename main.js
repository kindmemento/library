const library = document.querySelector('.library')
const card = document.querySelector('.card')
const addCard = document.querySelector('.add-card')
const plus = document.querySelector('.plus')
const form = document.querySelector('.form')
//const title = document.querySelector('#title').value
//const author = document.querySelector('#author').value
//const pages = document.querySelector('#pages').value

function openForm () {
  form.style.display = 'grid'
}

function closeForm () {
  form.style.display = 'none'
}

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		form.style.display = 'none'
	}
});

let myLibrary = []

function Book() {
  this.title = document.querySelector('#title').value
  this.author = document.querySelector('#author').value
  this.pages = document.querySelector('#pages').value

  closeForm();
  const newbook = document.createElement('div')
  newbook.classList.add('card')
  library.insertBefore(newbook, addCard)

  const options = document.createElement('div')
  options.classList.add('options')
  newbook.appendChild(options)
  library.insertBefore(newbook, addCard)

  const cancelButton = document.createElement('button')
  cancelButton.innerText = 'Cancel'
  cancelButton.classList.add('cancel-btn')
  options.appendChild(cancelButton);

  const editButton = document.createElement('button')
  editButton.innerText = 'Edit'
  editButton.classList.add('add-btn')
  options.appendChild(editButton)
}

function addBook() {
//to be updated
}