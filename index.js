function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
      .then(response => response.json()) // Convert response to JSON
      .then(data => renderBooks(data))   // Call renderBooks with the data
      .catch(error => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Clear existing list if any

  books.forEach(book => {
      const listItem = document.createElement("li");
      listItem.textContent = book.name; // Display the book title
      bookList.appendChild(listItem);
  });
}

// Fetch books when the page loads
document.addEventListener("DOMContentLoaded", fetchBooks);
