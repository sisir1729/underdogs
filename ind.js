var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
x[slideIndex-1].style.display = "block";
}
var x = document.getElementById("video");

function playVid() {
  x.play();
}

function pauseVid() {
  x.pause();
}
