// tạo alert khi click vào thêm vào danh sách yêu thích <a href="#" class="fas fa-heart"></a>
if (!sessionStorage.getItem("accessToken")) {
  window.location.href = "http://127.0.0.1:5500/template/login.html";
}

// check if user is admin
// get role from accessToken
// Giả sử access token đã được lưu trong biến "accessToken"
const tokenParts = sessionStorage.getItem("accessToken").split('.'); // Tách access token thành các phần

// Giải mã phần thân (payload) của token
const base64Url = tokenParts[1];
const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
const decodedData = JSON.parse(window.atob(base64));

// Truy cập thuộc tính "role" từ dữ liệu giải mã
const role = decodedData.role;

// Sử dụng giá trị role theo ý muốn
console.log(role);


if (role !== "ADMIN") {
  document.querySelector("#admin").style.display = "none";
}

const logoutLink = document.querySelector("#logout");
logoutLink.addEventListener("click", () => {
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("accessToken");
});


var addFavorite = document.querySelectorAll('.add-favorite');
for (var i = 0; i < addFavorite.length; i++) {
    addFavorite[i].addEventListener('click', function() {
        alert('Đã thêm vào danh sách yêu thích');
    });
}
var autoOpenControllerScriptRuntime = true;
var searchForm = document.querySelector('.search-form');
console.log(searchForm);
document.querySelector('#search-btn').addEventListener('click', () => {
    searchForm.classList.add('active');
    console.log('ok');
})

window.onscroll = () => {
    searchForm.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();
}

var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
 
  var swiper2 = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper3 = new Swiper(".category-content", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      
    },
  });


function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setInterval(loader, 2000);
}



