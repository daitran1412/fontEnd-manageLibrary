async function getBook() {
  const response = await fetch("http://localhost:8080/api/v1/books/get");
  const data = await response.json();
  console.log(data);
  const featured = document.querySelector("#top10");
  featured.innerHTML = "";

  // get 10 books with bookId from 1 to 10
  for (let i = 0; i < 10; i++) {
    const book = data[i];
    const bookCard = document.createElement("div");
    bookCard.classList.add("swiper-slide");
    bookCard.classList.add("box");
    bookCard.innerHTML = `
                    <div class="icons">
                        <a href="#" class="add-favorite fas fa-heart"></a>
                        <!-- <a href="#" class="fas fa-eye"></a> -->
                    </div>
                    <div class="image">
                        <img src="../static/image/${book.image}" class="book-img" alt="">
                    </div>
                    <div class="content">
                        <h3>${book.name}</h3>
                        <a href="./book/info-book.html?id=${
                            book.id
                          }&name=${encodeURIComponent(book.name
                      )}&authorsName=${encodeURIComponent(
                      book.authorsName
                      )}&publisher=${encodeURIComponent(book.publisher)}&quantity=${
                      book.quantity
                      }&category=${encodeURIComponent(
                      book.categoriesName
                      )}&description=${encodeURIComponent(book.description)}&image=${
                      book.image
                      }" class="btn">Chi tiết</a>
                    </div>
        `;
    featured.appendChild(bookCard);
  }

  console.log(data.length);

  const newBook = document.querySelector("#new-book");
  newBook.innerHTML = "";

}

async function getNewBook() {
  const response = await fetch("http://localhost:8080/api/v1/books/get");
  const data = await response.json();
  console.log(data);

  console.log(data.length);

  const newBook = document.querySelector("#new-book");
  newBook.innerHTML = "";

  // get 10 books with bookId from n to n-10
  for (let i = data.length - 1; i > data.length - 11; i--) {
    const book = data[i];
    const bookCard = document.createElement("div");
    bookCard.classList.add("swiper-slide");
    bookCard.classList.add("box");
    bookCard.innerHTML = `
                    <div class="icons">
                        <a href="#" class="add-favorite fas fa-heart"></a>
                        <!-- <a href="#" class="fas fa-eye"></a> -->
                    </div>
                    <div class="image">
                        <img src="../static/image/${
                          book.image
                        }" class="book-img" alt="">
                    </div>
                    <div class="content">
                        <h3>${book.name}</h3>
                        <a href="./book/info-book.html?id=${
                          book.id
                        }&name=${encodeURIComponent(book.name
                    )}&authorsName=${encodeURIComponent(
                    book.authorsName
                    )}&publisher=${encodeURIComponent(book.publisher)}&quantity=${
                    book.quantity
                    }&category=${encodeURIComponent(
                    book.categoriesName
                    )}&description=${encodeURIComponent(book.description)}&image=${
                    book.image
                    }" class="btn">Chi tiết</a>
                </div>
        `;
    newBook.appendChild(bookCard);
  }
}

getBook();
getNewBook();
