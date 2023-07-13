var slide_1 = document.getElementById("head");
var slide_2 = document.getElementById("para");
var slide_3 = document.getElementById("link-btn");
var slide_4 = document.getElementById("icon-1");
var slide_5 = document.getElementById("icon-2");


var bg_1 = slide_1.className;
var bg_2 = slide_2.className;
var bg_3 = slide_3.className;
var bg_4 = slide_4.className;
var bg_5 = slide_5.className;


function animate() {

	setTimeout(function(){
	  slide_1.className = bg_1 + " head-animate";
	},500);

	setTimeout(function(){
	  slide_2.className = bg_2 + " para-animate";
	},1000);

	setTimeout(function(){
	  slide_3.className = bg_3 + " btn-animate";
	},1300);

	setTimeout(function(){
	  slide_1.className = bg_1 + " hide-animate";
	},2500);

	setTimeout(function(){
	  slide_2.className = bg_2 + " hide-animate";
	},2800);

	setTimeout(function(){
	  slide_4.className = bg_4 + " icon-animate";
	},3000);

	setTimeout(function(){
	  slide_5.className = bg_5 + " icon-animate";
	},3500);

	setTimeout(remove,5000);

}


animate();

function remove() {
	slide_1.classList.remove("head-animate");
	slide_1.classList.remove("hide-animate");
	slide_2.classList.remove("para-animate");
	slide_3.classList.remove("btn-animate");
	slide_3.classList.remove("hide-animate");
	slide_4.classList.remove("icon-animate");
	slide_5.classList.remove("icon-animate");

	animate();
}


