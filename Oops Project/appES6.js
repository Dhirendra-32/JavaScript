class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// It will contain all the method user user would do in UI

class UI {
  addBoottoList(book) {
    const booklist = document.getElementById("book-list");

    // Create Tr element
    const row = document.createElement("tr");

    row.innerHTML = ` <td>${book.title}</td>
                      <td>${book.author}</td>
                      <td>${book.isbn}</td>
                      <td><a href='#' class = "delete">X</a></td>`;

    booklist.appendChild(row);
  }

  showError(message, className) {
    // create div

    const div = document.createElement("div");

    div.className = `alert ${className}`;

    // add text

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");

    const form = document.querySelector("#book-form");

    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearData() {
    document.getElementById("isbn").value = "";
    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
  }
}

// Eventlistener

const bookform = document.getElementById("book-form");

bookform.addEventListener("submit", function (e) {
  // After event fields has to be fetched

  const $title = document.getElementById("title").value;
  const $author = document.getElementById("author").value;
  const $isbn = document.getElementById("isbn").value;

  // Instanciating the object
  const book = new Book($title, $author, $isbn);

  // Instanciating the ui object

  const ui = new UI();

  // Validate the field in form

  if ($title === "" || $author === "" || $isbn === "") {
    // Show error

    ui.showError("Please fill all the fields ", "error");
  } else {
  }

  // add book to list

  ui.addBoottoList(book);
  ui.showError("Book added!", "success");
  ui.clearData(book);

  e.preventDefault();
});

// Evenlistner for Delete

document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();

  ui.deleteBook(e.target);

  ui.showError("Record has been removed ", "success");
  e.preventDefault();
});
