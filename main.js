let myLibrary = []

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
  };

function addBookToLibrary() {
  if (title.value.length === 0 || author.value.length === 0 || pages.value.length === 0) {
     alert('Please fill all fields.')
     return
   }
    const book = new Book(document.querySelector('#title').value, document.querySelector('#author').value, document.querySelector('#pages').value)

    if (myLibrary.some((newbook) => newbook.title === book.title)) {
      alert('The book is already in the library.')
      return
    } else {
      myLibrary.push(book)
      closeForm()
      resetLibrary()
      displayLibrary()
    }
}

function resetLibrary() {
  const lib = document.querySelector('.library')
  while (lib.firstChild) {
    lib.firstChild.remove()
  }
}

function displayLibrary() {
  myLibrary.forEach((book) => {
  const bookCard = document.createElement('div')
  const contentContainer = document.createElement('div')
  const title = document.createElement('div')
  const author = document.createElement('div')
  const pages = document.createElement('div')
  const footer = document.createElement('footer')
  const remove = document.createElement('button')
  
  bookCard.classList.add('book-card')
  contentContainer.classList.add('container')
  title.classList.add('title')
  author.classList.add('author')
  pages.classList.add('pages')
  remove.classList.add('remove-btn')
  
  title.innerText = book.title
  author.innerText = 'by ' + book.author
  pages.innerText = book.pages + ' pages'
  remove.innerText = 'Remove'
  
  document.querySelector('.library').appendChild(bookCard)
  bookCard.appendChild(contentContainer)
  contentContainer.appendChild(title)
  contentContainer.appendChild(author)
  contentContainer.appendChild(pages)
  contentContainer.appendChild(footer)
  footer.appendChild(remove)
  
  remove.onclick = () => {
    document.querySelector('.library').removeChild(bookCard)
  }
  })
}


const form = document.querySelector('.form')

function openForm() {
  form.style.display = 'grid'
}

function closeForm() {
  form.style.display = 'none'
  title.value = ''
  author.value = ''
  pages.value = ''
}

document.addEventListener('keydown', function(event) {
  if(event.key === "Escape") {
    form.style.display = 'none'
  }
});

document.addEventListener('keydown', function(event) {
  if(event.key === "Enter") {
    addBookToLibrary()
    event.preventDefault()
  }
})