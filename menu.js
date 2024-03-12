let btnOpenMenu = document.getElementById("btn-open-menu");
let btnCloseMenu = document.getElementById("btn-close-menu");
let menuMobile = document.getElementById("menu-mobile");
let menuLinks = menuMobile.querySelectorAll("a");

btnOpenMenu.onclick = function (e) {
  e.preventDefault();
  menuMobile.classList.add("opened");
};

btnCloseMenu.onclick = function (e) {
  e.preventDefault();
  menuMobile.classList.remove("opened");
};

document.addEventListener("click", function (e) {
  if (!menuMobile.contains(e.target) && e.target !== btnOpenMenu) {
    menuMobile.classList.remove("opened");
  }
});

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menuMobile.classList.remove("opened");
  });
});
