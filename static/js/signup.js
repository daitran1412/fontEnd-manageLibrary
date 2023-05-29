const signupButton = document.querySelector(".btn-sign");

signupButton.addEventListener("click", () => {
  console.log("signup button clicked");
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const date = document.querySelector("#date").value;

    const body = {
        "username": username,
        "password": password,
        "user": {
            "username": name,
            "dateOfbirth": date,
            "email": email,
            "phone": phone
        }
    }
  console.log(JSON.stringify(body));
  
  fetch("http://localhost:8080/api/v1/user-accounts/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status === "active") {
        const accessToken = response.token;
        sessionStorage.setItem("accessToken", accessToken);
        window.location.href = "http://127.0.0.1:5500/template/login.html";
      } else {
        alert(response.message);
        // alert("Information is required")
      }
    })
    .catch((error) => {
      console.log(error);
      console.log(response);
    });
});

  
