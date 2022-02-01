const Menu = document.getElementById('MenuP');
const HeaderM = document.getElementById('HeaderM');
const btnMenu = document.getElementById('menu');
const btnClose = document.getElementById('close');

const openAndClose = function () {
  if (Menu.classList.contains('mobileMenuInvis')) {
    Menu.classList.remove('mobileMenuInvis');
    Menu.classList.add('mobileMenuVis');
    HeaderM.classList.add('mobileMenuInvis');
  } else if (Menu.classList.contains('mobileMenuVis')) {
    Menu.classList.add('mobileMenuInvis');
    Menu.classList.remove('mobileMenuVis');
    HeaderM.classList.remove('mobileMenuInvis');
  }
};

btnMenu.addEventListener('click', openAndClose);
btnClose.addEventListener('click', openAndClose);
