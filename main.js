function displayBugerMenu(){
  const burgerMenu = document.getElementById('burgerMenu')
  var menuDisplay = window.getComputedStyle(burgerMenu).display;
  if(menuDisplay === 'none') {
    burgerMenu.style.display = 'block';
    myLogo.style.display = 'none';
    burgerBtn.style.display = 'none';
  } else {
  burgerMenu.style.display = 'none';
  myLogo.style.display = 'block';
  burgerBtn.style.display = 'block';
}
}

function exitBurguerMenu(){
  const burgerMenu = document.getElementById('burgerMenu')
  var menuDisplay = window.getComputedStyle(burgerMenu).display;
  if(menuDisplay === 'block') {
    burgerMenu.style.display = 'none';
    myLogo.style.display = 'block';
    burgerBtn.style.display = 'block';
  }
}

const burgerBtn = document.querySelector('#burgerBtn');
const myLogo = document.querySelector(".my-logo")
const exitButton = document.getElementById('exitButton');
const burgerMenuAnchor = document.getElementById('burgerMenu').querySelectorAll('a');
burgerBtn.addEventListener('click', displayBugerMenu);
exitButton.addEventListener('click', exitBurguerMenu);

//add even listeners to each anchor witin burguer menu;
for(let i = 0; i<burgerMenuAnchor.length; i++){
  burgerMenuAnchor[i].addEventListener('click', exitBurguerMenu);
}


  