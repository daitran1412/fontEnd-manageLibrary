let isFormActive = false;
async function getAllAccounts() {
  const response = await fetch(
    "http://localhost:8080/api/v1/user-accounts/get"
  );
  const accounts = await response.json();
  const accountTableBody = document.querySelector("#account-table-body");
  accountTableBody.innerHTML = "";
  accounts.forEach((account) => {
    const row = document.createElement("tr");
    console.log(account);
    row.innerHTML = `
            <th scope="row">
                <input type="checkbox" />
            </th>
            <td class="tm-product-name">${account.username}</td>
            <td>${account.status}</td>
            <td>${account.role}</td>
            <td>
                <a href="#" class="tm-info tm-product-delete-link" >
                <i class="far fa-user tm-product-delete-icon" id="info-account" data-account-id=${account.id}></i>
                </a>
            </td>
            <td>
                <a href="#" class="tm-product-delete-link">
                <i class="far fa-trash-alt tm-product-delete-icon" id="delete-account" data-account-id=${account.id}></i>
                </a>
            </td>
    `;
    accountTableBody.appendChild(row);
    });

  const deleteAccountLinks = document.querySelectorAll("#delete-account");
  deleteAccountLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      const accountId = link.dataset.accountId;
      await deleteAccount(accountId);
      await getAllAccounts();
    });
  });

  const infoAccountLinks = document.querySelectorAll("#info-account");
  infoAccountLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      const accountId = link.dataset.accountId;
      console.log(accountId);
      await getInfoAccount(accountId);
    });
  });

  const infoForm = document.querySelector(".tm-user-container");
  const infoBtn = document.querySelector(".tm-info");
  const closeBtn = document.querySelector(".tm-close-form");

//   infoBtn.forEach((btn) => {
//     btn.addEventListener("click", function () {
//       infoForm.forEach((form) => {
//         form.classList.toggle("active");
//       });
//       isFormActive = true; 
//     });
//   });
//   console.log(isFormActive)
//   closeBtn.forEach((btn) => {
//     btn.addEventListener("click", function (event) {
//       if (isFormActive) { 
//         event.preventDefault();
//         console.log("has close");
//         infoForm.forEach((form) => {
//           form.classList.remove("active");
//         });

//         isFormActive = false; 
//       }
//     });
//   });

  infoBtn.addEventListener("click", function () {
    infoForm.classList.toggle("active");
    isFormActive = true; 
  });

    closeBtn.addEventListener("click", function (event) {
        if (isFormActive) { 
            event.preventDefault();
            console.log("has close");
            infoForm.classList.remove("active");
            isFormActive = false; 
        }
        }
    );

}

async function deleteAccount(accountId) {
  const response = await fetch(
    `http://localhost:8080/api/v1/user-accounts/delete/${accountId}`,
    {
      method: "POST",
    }
  );
  if (response.ok) {
    alert("Xóa tài khoản thành công");
  } else {
    alert("Xóa tài khoản thất bại");
  }
}

async function getInfoAccount(accountId) {
    const response = await fetch(
        `http://localhost:8080/api/v1/user-accounts/get/id/${accountId}`
    );
    const account = await response.json();
    const userForm = document.querySelector("#user-form");
    userForm.innerHTML = "";
    const form = document.createElement("div");
    form.classList.add("tm-user-form");
    form.innerHTML = `
            <div class="tm-close-form fas fa-times" id="close-acc"></div>
            <div class="tm-title">
            <h3>Thông tin tài khoản</h3>
            </div>
            <div class="tm-user-field">
            <label for="name">Tên người dùng:    ${account.user.username}</label>
            </div>
            <div class="tm-user-field">
            <label for="name">Tên đăng nhập:    ${account.username}</label>
            </div>
            <div class="tm-user-field">
            <label for="name">Mật khẩu:    ${account.password}</label>
            </div>
            <div class="tm-user-field">
            <label for="name">Email:    ${account.user.email}</label>
            </div>
            <div class="tm-user-field">
            <label for="name">Số điện thoại:    ${account.user.phone}</label>
            </div>
            <div class="tm-user-field">
            <label for="name">Địa chỉ:    ${account.user.address}</label>
            </div>
            
        `;
    userForm.appendChild(form);

    // const infoForm = Array.from(document.querySelectorAll(".tm-user-container"));
    // const infoBtn = Array.from(document.querySelectorAll(".tm-info"));
    // const closeBtn = Array.from(document.querySelectorAll(".tm-close-form"));
    // infoBtn.forEach((btn) => {
    //   btn.addEventListener("click", function () {
    //     infoForm.forEach((form) => {
    //       form.classList.toggle("active");
    //     });
    //   });
    // });
  
    // closeBtn.forEach((btn) => {
    //   btn.addEventListener("click", function () {
    //     infoForm.forEach((form) => {
    //       form.classList.remove("active");
    //     });
    //   });
    // });
}


            

getAllAccounts();
