import "../styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  const HEADER_BTN_BURGER = document.querySelector(".header__burger-menu");
  const HEADER_BTN_CLOSE_MODAL = document.querySelector(".header__close-modal");
  const HEADER_LIST = document.querySelector(".header__list");

  HEADER_BTN_BURGER.addEventListener("click", (e) => {
    e.stopPropagation();
    HEADER_LIST.classList.add("header__list--opened");
  });
  HEADER_BTN_CLOSE_MODAL.addEventListener("click", (e) => {
    e.stopPropagation();
    HEADER_LIST.classList.add("animate-close-modal");
    HEADER_LIST.addEventListener(
      "animationend",
      () => {
        HEADER_LIST.classList.remove("header__list--opened");
        HEADER_LIST.classList.remove("animate-close-modal");
      },
      { once: true }
    );
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".clients__button-next",
      prevEl: ".clients__button-prev",
    },
  });

  var swiper2 = new Swiper(".HorsesSwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".clients__button-next",
      prevEl: ".clients__button-prev",
    },
  });
});
