const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
// const navMenu = document.querySelector(".nav-menu");

menuOpenButton.addEventListener('click', () =>{
    document.body.classList.toggle('show-mobile-menu');
})

menuCloseButton.addEventListener('click', () => {
    menuOpenButton.click()
})
