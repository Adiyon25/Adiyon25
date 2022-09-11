let slideIndex = 1;
var x=document.querySelector(".adiy-nav-mob");
let y=document.querySelector(".d-block-nav");
let z=document.querySelector(".d-block-nav-close");
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function accorDian(){

  if(x.style.display != "block"){
    x.style.display = "block";
  }
  y.style.display="none";
  z.style.display="block";
}
function cLose(){
  var x=document.querySelector(".adiy-nav-mob");
  x.style.display = "none";
  y.style.display="block";
}