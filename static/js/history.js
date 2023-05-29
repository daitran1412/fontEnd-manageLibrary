const borowButton = document.querySelector("#borow");
const returnButton = document.querySelector("#return");
const content = document.querySelector(".history .content");

borowButton.addEventListener("click", () => {
  returnButton.classList.remove("active");
  borowButton.classList.add("active");
  content.innerHTML = `<table>
    <tr>
        <th>STT</th>
        <th>Tên sách</th>
        <th>Ngày mượn</th>
        <th>Ngày trả</th>
        <th>Trạng thái</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Đắc nhân tâm</td>
        <td>20/10/2021</td>
        <td>20/11/2021</td>
        <td>Đang mượn</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Đắc nhân tâm</td>
        <td>20/10/2021</td>
        <td>20/11/2021</td>
        <td>Đang mượn</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Đắc nhân tâm</td>
        <td>20/10/2021</td>
        <td>20/11/2021</td>
        <td>Đang mượn</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Đắc nhân tâm</td>
        <td>20/10/2021</td>
        <td>20/11/2021</td>
        <td>Đang mượn</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Đắc nhân tâm</td>
        <td>20/10/2021</td>
        <td>20/11/2021</td>
        <td>Đang mượn</td>
    </tr>
</table>`;
});

returnButton.addEventListener("click", () => {
  borowButton.classList.remove("active");
  returnButton.classList.add("active");
  content.innerHTML = `<li>Để bảng 2 ở đây</li>
                        <li>Để bảng 2 ở đây</li>
                        <li>Để bảng 2 ở đây</li>
                        <li>Để bảng 2 ở đây</li>
                        <li>Để bảng 2 ở đây</li>
                        <li>Để bảng 2 ở đây</li>
                        <li>Để bảng 2 ở đây</li>`;
});

console.log("***************");

