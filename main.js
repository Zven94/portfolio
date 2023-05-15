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
console.log("burgerMenuAnchor = ", burgerMenuAnchor);

burgerBtn.addEventListener('click', displayBugerMenu);
exitButton.addEventListener('click', exitBurguerMenu);

//add even listeners to each anchor witin burguer menu;
for(let i = 0; i<burgerMenuAnchor.length; i++){
  console.log(burgerMenuAnchor[i]);
  burgerMenuAnchor[i].addEventListener('click', exitBurguerMenu);
}


  