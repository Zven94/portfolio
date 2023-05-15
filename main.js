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

console.log("Working");
const burgerBtn = document.querySelector('#burgerBtn');
console.log("burgerBtn");
const burgerMenuAnchor = document.getElementById('burgerMenu').querySelectorAll('a');
console.log("burgerMenu");

burgerBtn.addEventListener('click', displayBugerMenu)

  