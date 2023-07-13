// Accordion-Part
var coll = document.getElementsByClassName("bar_part");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-list");
    var content = this.nextElementSibling;
    if (content.style.display == "block") {
      content.style.display = "none";
    }
    else {
      content.style.display = "block";  
    }
  });
}

// Header-Mobile-Menu
var menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener("click", openNav); 
function openNav() {
  var menuBar = document.getElementById("menu-bar");
  menuBar.classList.toggle("toggle-menu");
  this.classList.toggle("change");
}

// Header-Scroll
var bottomTop = document.getElementById('bottom-top');
var head = document.getElementById('header');
addEventListener("scroll", scrollFunction); 
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    head.style.top = "0";
    bottomTop.style.bottom = "20px";
  } else {
    head.style.top = "-100px";
    bottomTop.style.bottom = "-100px";
  } 
}


