var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function setstickynav() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("stickynav")
  } else {
    nav.classList.remove("stickynav");
  }
} 
window.onscroll = function() {setstickynav()};