// document.querySelector('.menu-button').addEventListener('click', function(){
//   document.querySelector('.mobile-menu').classList.toggle('active');
// })
// function myFunction(x) {
//   x.classList.toggle("change");
// }

// document.querySelector('.list-link').addEventListener('click', function(){
//   document.querySelector('.mobile-menu').classList.remove('active');
//   if (document.querySelector('.menu-button').classList.remove('change'));})
  

const btnMenu = document.querySelector('.menu-button');
const menu = document.querySelector('.mobile-menu');
const toggleMenu = function() {
    menu.classList.toggle('active');
}
  
btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

const toggleImg = function() {
  btnMenu.classList.toggle('change');
}

btnMenu.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleImg();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu;
    const its_btnMenu = target == btnMenu;
    const its_close = btnMenu.classList.contains('change');
    const menu_is_active = menu.classList.contains('active');

    
    if (!its_menu && !its_btnMenu && menu_is_active && its_close) {
        toggleMenu(), toggleImg();
    }
});