document.addEventListener( "DOMContentLoaded", fetchBooks());
function fetchBooks() {
    fetch("https://upadhayay.github.io/db.json")
    .then(response => response.json())
    .then(data => createList(data));
}
function createList(data) {
    const booksContainer = document.getElementById('books');
    const mainUL = document.createElement('ol');
    mainUL.className = "books_list";
    for (let i = 0; i < data.books.length; i++) {
        const booksLi = document.createElement('li');
        const headingTag = document.createElement('h3');
        const paraTag1 = document.createElement('p');
        const paraTag2 = document.createElement('p');
        headingTag.innerHTML = data.books[i].title;
        paraTag1.innerHTML =  `Year: ${data.books[i].year}`
        paraTag2.innerHTML =  `Status: ${data.books[i].published}`
        // aTag.className = "books_link"
        // imageEle.src = 'images/blogCard1.jpg';
        // imageEle.className = "books_image";
        // booksLi.className = 'books_card';
        booksLi.append(headingTag, paraTag1, paraTag2)
        // booksLi.appendChild(aTag);
        mainUL.appendChild(booksLi);
    }
    booksContainer.appendChild(mainUL)
}