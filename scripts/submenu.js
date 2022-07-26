const submenuItem = document.querySelector('.header__submenu-list');
const itemAboutProject = document.querySelector('.header__about-project')

itemAboutProject.addEventListener('mouseenter', function() {
  submenuItem.style.visibility = "visible"
  submenuItem.style.opacity = "1"
})

submenuItem.addEventListener('mouseenter', function() {
  submenuItem.style.visibility = "visible"
  submenuItem.style.opacity = "1"
})

submenuItem.addEventListener('mouseleave', function() {
  submenuItem.style.visibility = "hidden"
  submenuItem.style.opacity = "0"
})

itemAboutProject.addEventListener('mouseleave', function() {
  submenuItem.style.visibility = "hidden"
  submenuItem.style.opacity = "0"
})