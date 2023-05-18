/*  variables creation  */

const burgerBtn = document.querySelector('#burgerBtn');
const myLogo = document.querySelector('.my-logo');
const exitButton = document.getElementById('exitButton');
const burgerMenuAnchor = document.getElementById('burgerMenu').querySelectorAll('a');

const seeProjectsBtn = document.getElementById('seeProjectsBtn');
const exitButtonPopup = document.getElementById('exitButton-popUp');

// constructor function

function MyCardTemplate(page, title, imgFile, h2, para, stack1, stack2, stack3, button) {
  this.page = page;
  this.title = title;
  this.imgFile = imgFile;
  this.h2 = h2;
  this.para = para;
  this.stack1 = stack1;
  this.stack2 = stack2;
  this.stack3 = stack3;
  this.button = button;
}

// add project cards to html

const myArr = [
  new MyCardTemplate(
    1,
    'projectCards',
    './images/project-example.png',
    'Profesional Art Printing Data',
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry´s standard.',
    'HTML',
    'Boostrap',
    'Ruby',
    'See project',
  ),
  new MyCardTemplate(
    2,
    'projectCards',
    './images/project-example.png',
    'Profesional Art Printing Data',
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry´s standard.',
    'HTML',
    'Boostrap',
    'Ruby',
    'See project',
  ),
  new MyCardTemplate(
    3,
    'projectCards',
    './images/project-example.png',
    'Profesional Art Printing Data',
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry´s standard.',
    'HTML',
    'Boostrap',
    'Ruby',
    'See project',
  ),
  new MyCardTemplate(
    4,
    'projectCards',
    './images/project-example.png',
    'Profesional Art Printing Data',
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry´s standard.',
    'HTML',
    'Boostrap',
    'Ruby',
    'See project',
  ),
  new MyCardTemplate(
    5,
    'projectCards',
    './images/project-example.png',
    'Profesional Art Printing Data',
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry´s standard.',
    'HTML',
    'Boostrap',
    'Ruby',
    'See project',
  ),
  new MyCardTemplate(
    6,
    'projectCards',
    './images/project-example.png',
    'Profesional Art Printing Data',
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry´s standard.',
    'HTML',
    'Boostrap',
    'Ruby',
    'See project',
  ),
];

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

function displayPopUp() {
  const contPopUp = document.getElementById('contPopUp');
  const popUpDisplay = window.getComputedStyle(contPopUp).display;
  if (popUpDisplay === 'none') {
    contPopUp.style.display = 'block';
  } else {
    contPopUp.style.display = 'none';
  }
}

function exitPopUp() {
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

function creatCardTemplate(i) {
  // ------- set parent where create cards -----
  const contenedor = document.getElementById('projectCards');

  // ------- create div with a class "sec" -----

  const divElement = document.createElement('div');
  divElement.classList.add('sec');
  contenedor.appendChild(divElement); // set the div inside the parent

  // ------- create img with a class "img-w1" -----

  const imgElement = document.createElement('img');
  divElement.appendChild(imgElement);
  imgElement.src = myArr[i].imgFile;
  imgElement.classList.add('img-w1');

  // ------- create div 1 with a class "sec" -----

  const divElement1 = document.createElement('div');
  divElement1.classList.add('div-4');
  divElement.appendChild(divElement1); // set the div inside the div parent

  // ------- create div 2 with a class "sec" -----

  const divElement2 = document.createElement('div');
  divElement2.classList.add('sec');
  divElement.appendChild(divElement2); // set the div inside the div parent

  // ------- create h2 with a class "header-4" -----

  const h2Element = document.createElement('h2');
  divElement1.appendChild(h2Element);
  h2Element.textContent = myArr[i].h2;
  h2Element.classList.add('header-4');

  // ------- create p with a class "para-3" -----

  const pElement = document.createElement('p');
  divElement1.appendChild(pElement);
  pElement.textContent = myArr[i].para;
  pElement.classList.add('para-3');

  // ------- create ul with a class "ulDiv" & li to it -----

  // ------- ul ------//

  const ulElement = document.createElement('ul');
  divElement2.appendChild(ulElement);
  ulElement.classList.add('tech-stack-2');

  // ------- li ------//

  const liElement1 = document.createElement('li');
  ulElement.appendChild(liElement1);
  liElement1.classList.add('h4-5');
  liElement1.textContent = myArr[i].stack1;

  const liElement2 = document.createElement('li');
  ulElement.appendChild(liElement2);
  liElement2.classList.add('h4-6');
  liElement2.textContent = myArr[i].stack2;

  const liElement3 = document.createElement('li');
  ulElement.appendChild(liElement3);
  liElement3.classList.add('h4-7');
  liElement3.textContent = myArr[i].stack3;

  // ------- create button with a class "button-2" -----

  const btnElement = document.createElement('button');
  divElement.appendChild(btnElement);
  btnElement.classList.add('button-2');
  btnElement.textContent = myArr[i].button;
  btnElement.type = 'sumit';
  btnElement.addEventListener('click', displayPopUp);
}

// ----------------  Event Listener -----------------------//

burgerBtn.addEventListener('click', displayBugerMenu);
exitButton.addEventListener('click', exitBurguerMenu);
seeProjectsBtn.addEventListener('click', displayPopUp);
exitButtonPopup.addEventListener('click', exitPopUp);

// add even listeners to each anchor witin burguer menu;

for (let i = 0; i < burgerMenuAnchor.length; i += 1) {
  burgerMenuAnchor[i].addEventListener('click', exitBurguerMenu);
}

for (let i = 0; i < 6; i += 1) {
  creatCardTemplate(i); // call function to create card
}

// ----------------  Form validation  -----------------------//

const formData = document.querySelector('.form');
const btnForm = formData.querySelector('button');
const spanError = formData.querySelector('.error');

function formValidation(event) {
  const emailForm = formData.email.value;
  if (emailForm === emailForm.toLowerCase()) {
    spanError.textContent = null;
    console.log('true');
  } else {
    spanError.textContent = 'Email must to be in lower case';
    event.preventDefault();
    console.log('false');
  }
}

btnForm.addEventListener('click', formValidation);
