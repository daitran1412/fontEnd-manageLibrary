const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const name = decodeURIComponent(urlParams.get("name"));
const authorsName = decodeURIComponent(urlParams.get("authorsName"));
const publisher = decodeURIComponent(urlParams.get("publisher"));
const image = decodeURIComponent(urlParams.get("image"));
const category = decodeURIComponent(urlParams.get("category"));
const description = decodeURIComponent(urlParams.get("description"));

const bookInfo = document.querySelector(".book-info");
bookInfo.innerHTML = `
            <div class="book-container">
                        
            <div class="infor">
                <img src="../../static/image/${image}" alt="sách"  class="bookinfo-img">
                <div class="content">
                    <h3>${name}</h3>
                    <span>Tác giả: ${authorsName}</span>
                    <span>Nhà xuất bản: ${publisher}</span>
                    <span>Thể loại: ${category}</span>
                    <span>Mô tả: ${description}</span>
                </div>
            </div>

            <div class="action">
                <a href="#" class="btn">Mượn sách</a>
                <a href="#" class="btn">Thêm vào yêu thích</a>
            </div>

            </div>
    `
