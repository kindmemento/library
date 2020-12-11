const library = document.querySelector('.library')
const form = document.querySelector('.form')

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

document.addEventListener('keydown', function(event) {
  if(event.key === "Enter") {
    addBookToLibrary()
  }
})

let myLibrary = []

function Book() {
  this.title = document.querySelector('#title').value;
  this.author = document.querySelector('#author').value;
  this.pages = document.querySelector('#pages').value;
}

function addBookToLibrary() {
  const book = new Book()
  myLibrary.push(book)
  closeForm()

  const bookCard = document.createElement('div')
  bookCard.classList.add('book-card')
  library.appendChild(bookCard)

  const contentContainer = document.createElement('div')
  contentContainer.classList.add('container')
  bookCard.appendChild(contentContainer)

  const header = document.createElement('header')
  contentContainer.appendChild(header)

  const edit = document.createElement('button')
  edit.innerText = 'Edit'
  edit.classList.add('add-btn')
  header.appendChild(edit)

  const remove = document.createElement('button')
  remove.innerText = 'Remove'
  remove.classList.add('cancel-btn')
  header.appendChild(remove)

  const title = document.createElement('div')
  title.innerText = book.title
  title.classList.add('.title')
  contentContainer.appendChild(title);

  const author = document.createElement('div')
  author.innerText = book.author
  contentContainer.appendChild(author)

  const pages = document.createElement('div')
  pages.innerText = book.pages
  contentContainer.appendChild(pages)
}