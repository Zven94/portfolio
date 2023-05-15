function displayBugerMenu(){
  console.log("I'm in the function displayBugerMenu")
  const burgerMenu = document.getElementById('burgerMenu')
  var menuDisplay = window.getComputedStyle(burgerMenu).display;
  if(menuDisplay === 'none') {
    burgerMenu.style.display = 'block';
  } else {
  burgerMenu.style.display = 'none';
}
}

function exitBurguerMenu(){
  console.log("I'm in the function exitBugerMenu")
  const burgerMenu = document.getElementById('burgerMenu')
  var menuDisplay = window.getComputedStyle(burgerMenu).display;
  if(menuDisplay === 'block') {
    burgerMenu.style.display = 'none';
  }
}

console.log("Working");
const burgerBtn = document.querySelector('#burgerBtn');
const exitButton = document.getElementById('exitButton');
console.log("burgerBtn");
const burgerMenuAnchor = document.getElementById('burgerMenu').querySelectorAll('a');
console.log("burgerMenu");

burgerBtn.addEventListener('click', displayBugerMenu);
exitButton.addEventListener('click', exitBurguerMenu);

  