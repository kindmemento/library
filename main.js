const library = document.querySelector('.library')
const card = document.querySelector('.card')
const plus = document.querySelector('.plus')
const form = document.querySelector('.form')
const title = document.querySelector('#title').value
const author = document.querySelector('#author').value
const pages = document.querySelector('#pages').value

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
}

function addBook() {
  closeForm();
  const newbook = document.createElement('div')
  newbook.classList.add('card')
  library.insertBefore(newbook, card)

  const options = document.createElement('div')
  options.classList.add('options')
  newbook.appendChild(options)
  library.insertBefore(newbook, card)
}

