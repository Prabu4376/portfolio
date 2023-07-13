// Header-Part
var headerPart = document.querySelector('header');

	window.addEventListener('scroll', function() {

	    if (window.scrollY > 200) {
	        headerPart.classList.add('active');
	        headerPart.classList.remove('remove');
	    } else {
	    	headerPart.classList.add('remove');
	        headerPart.classList.remove('active');
	    }
});

// Tab-Part
document.getElementById("tab_list_1").addEventListener('click',tab_1);
document.getElementById("tab_list_2").addEventListener('click',tab_2);
document.getElementById("tab_list_3").addEventListener('click',tab_3);

function tab_1() {
  document.getElementById("tab1").classList.add("tab-show-1");
  document.getElementById("tab2").classList.remove("tab-show-2");
  document.getElementById("tab3").classList.remove("tab-show-3");
  document.getElementById("tab1").classList.remove("tab-show-1-hide");
  document.getElementById("tab_list_1").classList.add("active-tab");
  document.getElementById("tab_list_2").classList.remove("active-tab");
  document.getElementById("tab_list_3").classList.remove("active-tab");
  document.getElementById("tab_list_1").classList.remove("default-active");
}
function tab_2() {
  document.getElementById("tab2").classList.add("tab-show-2");
  document.getElementById("tab1").classList.add("tab-show-1-hide");
  document.getElementById("tab3").classList.remove("tab-show-3");
  document.getElementById("tab_list_2").classList.add("active-tab");
  document.getElementById("tab_list_1").classList.remove("active-tab");
  document.getElementById("tab_list_3").classList.remove("active-tab");
  document.getElementById("tab_list_1").classList.remove("default-active");
}
function tab_3() {
  document.getElementById("tab3").classList.add("tab-show-3");
  document.getElementById("tab1").classList.add("tab-show-1-hide");
  document.getElementById("tab2").classList.remove("tab-show-2");
  document.getElementById("tab_list_3").classList.add("active-tab");
  document.getElementById("tab_list_2").classList.remove("active-tab");
  document.getElementById("tab_list_1").classList.remove("active-tab");
  document.getElementById("tab_list_1").classList.remove("default-active");
}



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