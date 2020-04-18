const menuOverlay = document.querySelector(".js-mobile-menu-overlay");
const mobileIconMenu = document.querySelector(".js-mobile-menu");

const toogleMenu = () => {
  menuOverlay.classList.toggle("header__menu-mobile-overlay--show");
  const isShowed = menuOverlay.classList.contains(
    "header__menu-mobile-overlay--show"
  );
  document.body.style.overflow = isShowed ? "hidden" : "auto";
};

mobileIconMenu.addEventListener("click", () => toogleMenu());

document.querySelectorAll(".js-mobile-menu-item").forEach((item) => {
  item.addEventListener("click", () => toogleMenu());
});
