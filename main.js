const library = document.querySelector('.library')
const form = document.querySelector('.form')

function openForm () {
  form.style.display = 'grid'
}

function closeForm () {
  form.style.display = 'none'
}

document.addEventListener('keydown', function(event) {
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
  this.completedPages = document.querySelector('#completed-pages').value
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

  const title = document.createElement('div')
  const titleCapitalized = book.title.charAt(0).toUpperCase() + book.title.slice(1)
  title.innerText = titleCapitalized
  title.classList.add('title')
  contentContainer.appendChild(title);

  const author = document.createElement('div')
  const authorCapitalized = book.author.charAt(0).toUpperCase() + book.author.slice(1)
  author.innerText = 'by ' + authorCapitalized
  author.classList.add('author')
  contentContainer.appendChild(author)

  const pages = document.createElement('div')
  pages.innerText = book.completedPages + '/' + book.pages + ' pages read'
  pages.classList.add('pages')
  contentContainer.appendChild(pages)

  const footer = document.createElement('footer')
  contentContainer.appendChild(footer)

  const remove = document.createElement('button')
  remove.innerText = 'Remove'
  remove.classList.add('remove-btn')
  footer.appendChild(remove)

  remove.onclick = function () {
  library.removeChild(bookCard)
  }
}