

// Back to Top Button appears after Section Title.    //

window.addEventListener("scroll", function(event) {
  var top = this.scrollY

if (top < 500) {
  document.querySelector(".back-to-top").style.display = "none";
} else {
  document.querySelector(".back-to-top").style.display = "flex";
}
});

// Sliding image appears after x seconds.    //
window.addEventListener("load", function() {
  // Wait 3 seconds (3000 milliseconds) before sliding in
  setTimeout(function() {
    const img = document.getElementById("sliding-image");
    img.classList.add("slide-in");
  }, 3000); 
});


//Sliding main heading and subheading appears after x seconds.    //
window.addEventListener("load", function() {
  // Main heading slides in after 4 seconds
  setTimeout(function() {
    document.getElementById("main-heading").classList.add("slide-in");
  }, 4000); 

  // Subheading slides in a bit later, after 5 seconds
  setTimeout(function() {
    document.getElementById("sub-heading").classList.add("slide-in");
  }, 4500); 
});