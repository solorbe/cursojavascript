// const menuMain = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu ');

// menuMain.addEventListener ('click',toggleDesktopMenu);

// function toggleDesktopMenu(){
//     desktopMenu.classList.toggle('inactive');
//     console.log ('click');
// }

// console.log ('funciona maim.js')


const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  console.log('Click');
  desktopMenu.classList.toggle('inactive');
}

console.log('JS funcionando');