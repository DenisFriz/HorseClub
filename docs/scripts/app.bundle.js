(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".header__burger-menu"),t=document.querySelector(".header__close-modal"),n=document.querySelector(".header__list");e.addEventListener("click",(e=>{e.stopPropagation(),n.classList.add("header__list--opened")})),t.addEventListener("click",(e=>{e.stopPropagation(),n.classList.add("animate-close-modal"),n.addEventListener("animationend",(()=>{n.classList.remove("header__list--opened"),n.classList.remove("animate-close-modal")}),{once:!0})})),new Swiper(".mySwiper",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".clients__button-next",prevEl:".clients__button-prev"}}),new Swiper(".HorsesSwiper",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".clients__button-next",prevEl:".clients__button-prev"}})}))})();