const loginButton = document.querySelector(".btn-login");

loginButton.addEventListener("click", () => {
  console.log("login button clicked");
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  fetch("http://localhost:8080/api/v1/user-accounts/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status === "active") {
        const accessToken = response.token;
        sessionStorage.setItem("accessToken", accessToken);
        window.location.href = "http://127.0.0.1:5500/template/";
      } else {
        alert(response.message);
      }
    })
    .catch((error) => {
      console.log(error);
      console.log(response);
    });
});

const rememberMe = document.querySelector("#remember-me").checked;

if (rememberMe) {
  const expires = new Date();
  expires.setDate(expires.getDate() + 7); // Thời hạn lưu là 7 ngày
  sessionStorage.setItem("rememberMe", true);
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("password", password);
  sessionStorage.setItem("expires", expires.getTime());
} else {
  sessionStorage.removeItem("rememberMe");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("password");
  sessionStorage.removeItem("expires");
}

window.addEventListener("load", () => {
  const rememberMe = sessionStorage.getItem("rememberMe");
  const username = sessionStorage.getItem("username");
  const password = sessionStorage.getItem("password");
  const expires = sessionStorage.getItem("expires");

  if (
    rememberMe &&
    username &&
    password &&
    expires &&
    new Date().getTime() < expires
  ) {
    fetch("http://localhost:8080/api/v1/user-accounts/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "active") {
          const accessToken = response.token;
          sessionStorage.setItem("accessToken", accessToken);
          window.location.href = "http://127.0.0.1:5500/template/";
        } else {
          alert(response.message);
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(response);
      });
  }
});
