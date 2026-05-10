const navLinks = document.querySelector(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
// const navMenu = document.querySelector(".nav-menu");

menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle('show-mobile-menu');
})

menuCloseButton.addEventListener('click', () => {
    menuOpenButton.click()
})

navLinks.addEventListener('click', () => {
    navLinks.addEventListener('click', () => menuOpenButton.click())
}); //abre el link al clickearlo

// slider icianization
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    // spaceBetween: 25,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // responsive behavior
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});