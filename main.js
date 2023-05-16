/*  variables creation  */

const burgerBtn = document.querySelector('#burgerBtn');
const myLogo = document.querySelector('.my-logo');
const exitButton = document.getElementById('exitButton');
const burgerMenuAnchor = document.getElementById('burgerMenu').querySelectorAll('a');

const seeProjectsBtn = document.getElementById('seeProjectsBtn')
const exitButtonPopup = document.getElementById('exitButton-popUp');

/*  functions for buttons */

function displayBugerMenu() {
  const burgerMenu = document.getElementById('burgerMenu');
  const menuDisplay = window.getComputedStyle(burgerMenu).display;
  if (menuDisplay === 'none') {
    burgerMenu.style.display = 'block';
    myLogo.style.display = 'none';
    burgerBtn.style.display = 'none';
  } else {
    burgerMenu.style.display = 'none';
    myLogo.style.display = 'block';
    burgerBtn.style.display = 'block';
  }
}

function exitBurguerMenu() {
  const burgerMenu = document.getElementById('burgerMenu');
  const menuDisplay = window.getComputedStyle(burgerMenu).display;
  if (menuDisplay === 'block') {
    burgerMenu.style.display = 'none';
    myLogo.style.display = 'block';
    burgerBtn.style.display = 'block';
  }
}

function displayPopUp(){
  const contPopUp = document.getElementById('contPopUp');
  const popUpDisplay = window.getComputedStyle(contPopUp).display;
  if (popUpDisplay === 'none') {
    contPopUp.style.display = 'block';
/*    burgerBtn.style.display = 'none'; */
  } else {
    contPopUp.style.display = 'none';
/*    burgerBtn.style.display = 'none'; */
  }
}

function exitPopUp () {
  const contPopUp = document.getElementById('contPopUp');
  const popUpDisplay = window.getComputedStyle(contPopUp).display;
  if (popUpDisplay === 'block') {
    contPopUp.style.display = 'none';
/*    burgerBtn.style.display = 'none'; */
  } else {
    contPopUp.style.display = 'none';
/*    burgerBtn.style.display = 'none'; */
  }
}



burgerBtn.addEventListener('click', displayBugerMenu);
exitButton.addEventListener('click', exitBurguerMenu);
seeProjectsBtn.addEventListener('click', displayPopUp);
exitButtonPopup.addEventListener('click', exitPopUp);


// add even listeners to each anchor witin burguer menu;

for (let i = 0; i < burgerMenuAnchor.length; i += 1) {
  burgerMenuAnchor[i].addEventListener('click', exitBurguerMenu);
}