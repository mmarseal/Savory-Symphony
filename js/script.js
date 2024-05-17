// Toogle Class Active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika humburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toogle class active search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault(); // ini biarr pas lagi ngeklik halamannya ngga balik keatas
};

// toggle class atctive shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-botton").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button ");
const scb = document.querySelector("#shopping-cart-botton");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const itemDetailButtons = document.querySelectorAll(
  ".item-detail-botton, .item-detail-botton, .item-detail-botton"
);

itemDetailButtons.forEach((btn, index) => {
  btn.onclick = (e) => {
    e.preventDefault();

    // modal yang sesuai berdasarkan index tombol yang diklik
    const itemDetailModal = document.querySelector(
      `#item-detail-modal${index + 1}`
    );
    itemDetailModal.style.display = "flex";
  };
  // ini agar ketika klick icon eye, di semua card berfungsi, tidak hanya satu
});

//semua tombol close
const closeIcons = document.querySelectorAll(".modal .close-icon");

closeIcons.forEach((icon, index) => {
  icon.onclick = (e) => {
    e.preventDefault();
    //modal yang sesuai berdasarkan index tombol close yang diklik
    const itemDetailModal = document.querySelector(
      `#item-detail-modal${index + 1}`
    );
    itemDetailModal.style.display = "none";
  };
});

window.onclick = (e) => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
};

const addCB = document.querySelectorAll(".modal .addCart");

addCB.forEach((button) => {
  button.onclick = (e) => {
    e.preventDefault();
    const modal = button.closest(".modal");
    modal.style.display = "none";
  };
});
