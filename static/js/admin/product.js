async function getAllBooks() {
  const response1 = await fetch("http://localhost:8080/api/v1/books/get");
  const books = await response1.json();

  const response2 = await fetch("http://localhost:8080/api/v1/author/get");
  const authors = await response2.json();

  const tableBody = document.querySelector("#table-body");
  tableBody.innerHTML = "";
  books.forEach((book) => {
    const row = document.createElement("tr");
    console.log(book.authorsName);
    row.innerHTML = `
                <th scope="row">
                <input type="checkbox" />
                </th>
                <td class="tm-product-name">
                    <a href="edit-product.html?id=${
                      book.id
                    }&name=${encodeURIComponent(
      book.name
    )}&authorsName=${encodeURIComponent(
      book.authorsName
    )}&publisher=${encodeURIComponent(book.publisher)}&quantity=${
      book.quantity
    }&category=${encodeURIComponent(
      book.categoriesName
    )}&description=${encodeURIComponent(book.description)}&image=${
      book.image
    }" style="color:#fff">${book.name}</a>
                </td>
                <td>${book.authorsName}</td>
                <td>${book.publisher}</td>
                <td>${book.quantity}</td>
                <td>
                <a href="#" class="tm-product-delete-link" id="delete-book" data-book-id="${
                  book.id
                }">
          <i class="far fa-trash-alt tm-product-delete-icon"></i>
        </a>
                </td>
        `;
    tableBody.appendChild(row);
  });

  const deleteBookLinks = document.querySelectorAll("#delete-book");
  deleteBookLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      const bookId = link.dataset.bookId;
      await deleteBook(bookId);
      await getAllBooks();
    });
  });
}

async function getAllCategories() {
  const response = await fetch("http://localhost:8080/api/v1/categories/get");
  const categories = await response.json();

  const categoriesTableBody = document.querySelector("#category-table");
  categoriesTableBody.innerHTML = "";
  categories.forEach((category) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                <td class="tm-product-name">${category.name}</td>
                <td class="text-center">
                    <a href="#" class="tm-product-delete-link" id="delete-category" data-book-id="${category.id}">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                    </a>
                </td>
        `;
    categoriesTableBody.appendChild(row);
  });

  const deleteCategoryLinks = document.querySelectorAll("#delete-category");
  deleteCategoryLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      console.log(link.dataset);
      const categoryId = link.dataset.bookId;
      await deleteCategory(categoryId);
      await getAllCategories();
    });
  });
}

async function getAllPublishers() {
  const response = await fetch("http://localhost:8080/api/v1/publisher/get");
  const publishers = await response.json();

  const publishersTableBody = document.querySelector("#publisher-table");
  publishersTableBody.innerHTML = "";
  publishers.forEach((publisher) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                <td class="tm-product-name">${publisher.name}</td>
                <td class="text-center">
                    <a href="#" class="tm-product-delete-link" id="delete-publisher" data-book-id="${publisher.id}">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                    </a>
                </td>
        `;
    publishersTableBody.appendChild(row);
  });

  const deletePublisherLinks = document.querySelectorAll("#delete-publisher");
  deletePublisherLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      console.log(link.dataset);
      const publisherId = link.dataset.bookId;
      await deletePublisher(publisherId);
      await getAllPublishers();
    });
  });
}

async function deleteBook(bookId) {
  const response = await fetch(
    `http://localhost:8080/api/v1/books/delete/${bookId}`,
    {
      method: "POST",
    }
  );
  if (response.ok) {
    console.log("Xóa sách thành công");
  } else {
    console.error("Lỗi xóa sách");
  }
}

async function deleteCategory(categoryId) {
  const response = await fetch(
    `http://localhost:8080/api/v1/categories/delete/${categoryId}`,
    {
      method: "POST",
    }
  );
  if (response.ok) {
    console.log("Xóa danh mục thành công");
  } else {
    console.error("Lỗi xóa danh mục");
  }
}

async function deletePublisher(publisherId) {
  const response = await fetch(
    `http://localhost:8080/api/v1/publisher/delete/id/${publisherId}`,
    {
      method: "POST",
    }
  );
  if (response.ok) {
    console.log("Xóa nhà xuất bản thành công");
  } else {
    console.error("Lỗi xóa nhà xuất bản");
  }
}

getAllBooks();
getAllCategories();
getAllPublishers();
