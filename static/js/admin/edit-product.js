const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const name = decodeURIComponent(urlParams.get("name"));
const authorsName = decodeURIComponent(urlParams.get("authorsName"));
const publisher = decodeURIComponent(urlParams.get("publisher"));
const quantity = urlParams.get("quantity");
const category = decodeURIComponent(urlParams.get("category"));
const description = decodeURIComponent(urlParams.get("description"));
const image = decodeURIComponent(urlParams.get("image"));

document.querySelector("#book-name").value = name;
document.querySelector("#author").value = authorsName;
document.querySelector("#publisher").value = publisher;
document.querySelector("#quantity").value = quantity;
document.querySelector("#category").value = category;
document.querySelector("#img-book").src = image;
document.querySelector("#description").innerHTML = description;
document.querySelector("#img-book").src = "../../static/image/" + image;


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
    console.log("hghghg")
    if (fileInput === undefined) {
        fileInput = {
            name: image
        }
    }
    console.log(fileInput)
    console.log(fileInput.name)


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

    fetch("http://localhost:8080/api/v1/books/update/"+id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.message === "Update book successfully") {
                alert("Cập nhật sách thành công");
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


