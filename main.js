let myLibrary = []

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
    this.read = false
  };

function addBookToLibrary() {
  if (title.value.length === 0 || author.value.length === 0 || pages.value.length === 0) {
     alert('Please fill all fields.')
     return
   }
    const book = new Book(document.querySelector('#title').value, document.querySelector('#author').value, document.querySelector('#pages').value)

    if (document.querySelector('#is-read').checked) {
      book.read = true
    }

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
  const title = document.createElement('h3')
  const author = document.createElement('h3')
  const pages = document.createElement('h3')
  const footer = document.createElement('footer')
  const read = document.createElement('button')
  const hr = document.createElement('hr')
  const remove = document.createElement('button')
  
  bookCard.classList.add('book-card')
  title.classList.add('h3')
  author.classList.add('h3')
  pages.classList.add('h3')
  read.classList.add('read')
  remove.classList.add('remove-btn')
  
  title.innerText = book.title
  author.innerText = 'by ' + book.author
  pages.innerText = book.pages + ' pages'
  if (book.read) {
    read.innerText = 'Read'
    read.style.color = 'rgb(0, 110, 0)'
  } else {
    read.innerText = 'Not read'
    read.style.color = 'red'
  }
  remove.innerText = 'Remove'
  
  document.querySelector('.library').appendChild(bookCard)
  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  bookCard.appendChild(read)
  bookCard.appendChild(footer)
  footer.appendChild(hr)
  footer.appendChild(remove)
  
  read.onclick = () => {
    if (book.read) {
      read.innerText = 'Not read'
      read.style.color = 'red'
      book.read = false
    } else {
      read.innerText = 'Read'
      read.style.color = 'rgb(0, 110, 0)'
      book.read = true
    }
  }

  remove.onclick = () => {
    myLibrary = myLibrary.filter((bookObj) => bookObj.title !== book.title)
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