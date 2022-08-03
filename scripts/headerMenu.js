const headerMenuButton = document.querySelector('.header__mobile-menu');
const headerMenuPopup = document.querySelector('.popup-menu');
const headerMenuCloseButton = headerMenuPopup.querySelector('.popup-menu__close-button');
const itemMenu = headerMenuPopup.querySelectorAll('.popup-menu__menu-item');

// Слушатель открытия попапа мобильного меню
headerMenuButton.addEventListener('click', function () {
  headerMenuPopup.style.visibility = "visible";
  headerMenuPopup.style.display = "block";
})

// Слушатель закрытия попапа мобильного меню
headerMenuCloseButton.addEventListener('click', function () {
  headerMenuPopup.style.visibility = "hidden";
  headerMenuPopup.style.display = "block";
})

// Слушатель закрытия попапа мобильного меню
itemMenu.forEach(function (item) {
  item.addEventListener('click', function () {
    headerMenuPopup.style.visibility = "hidden";
    headerMenuPopup.style.display = "none";
  })
})