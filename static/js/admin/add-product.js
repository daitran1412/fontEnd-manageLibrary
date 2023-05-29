
const fileInput = document.querySelector('#fileInput');
const previewImage = document.querySelector('#img-book');

fileInput.addEventListener('click', () => {
    console.log('file input clicked');
});

fileInput.addEventListener('change', () => {

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        previewImage.setAttribute('src', reader.result);
    });
    console.log(file.name);
    reader.readAsDataURL(file);
});


const addBook = document.querySelector('#btn-add-book');

addBook.addEventListener('click', () => {
    console.log('add book button clicked');
    const bookName = document.querySelector('#book-name').value;
    const author = document.querySelector('#author').value.split(',');
    const publisher = document.querySelector('#publisher').value;
    const description = document.querySelector('#description').value;
    const category = document.querySelector('#category').value.split(',');
    const quantity = document.querySelector('#quantity').value;
    var fileInput = document.querySelector('#fileInput').files[0];
    if (fileInput === undefined) {
        fileInput = {
            name: "default-book-cover.png"
        }
    }
    console.log(fileInput);

    const body = {
        "name": bookName,
        "authorsName": author,
        "publisher": publisher,
        "categoriesName": category,
        "description": description,
        "quantity": quantity,
        "status": "available",
        "image": fileInput.name 
    }
    console.log(JSON.stringify(body));

    fetch("http://localhost:8080/api/v1/books/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response.status);
            if (response.status === "available") {
                alert("Thêm sách thành công");
                window.location.href = "http://127.0.0.1:5500/template/templatemo_524_product_admin/products.html";
            } else {
                alert(response.message);
            }
        })
        .catch((error) => {
            console.log(error);
            console.log(response);
        }
        );
});


