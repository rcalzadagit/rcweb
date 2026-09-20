

// Back to Top Button appears after Section Title.    //

window.addEventListener("scroll", function(event) {
  var top = this.scrollY

if (top < 500) {
  document.querySelector(".back-to-top").style.display = "none";
} else {
  document.querySelector(".back-to-top").style.display = "flex";
}
});