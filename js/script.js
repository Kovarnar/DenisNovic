const HEADER = document.querySelector('.header');
const MENU_BUTTON = HEADER.querySelector('.header__button');
MENU_BUTTON.addEventListener('click', function () {
    HEADER.classList.toggle('header--active');
    document.body.classList.toggle('no-scroll');
});
const NAV = document.querySelector('.navigation-list');
NAV.addEventListener('click', function() {
    HEADER.classList.remove('header--active');
    document.body.classList.remove('no-scroll');
});