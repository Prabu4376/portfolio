var slide_1 = document.getElementById("head-1");
var slide_2 = document.getElementById("head-2");
var slide_3 = document.getElementById("item-1");

var slide_4 = document.getElementById("icon-1");
var slide_5 = document.getElementById("icon-2");

var slide_6 = document.getElementById("text-1");
var slide_7 = document.getElementById("text-2");
var slide_8 = document.getElementById("slide-2");


var bg_1 = slide_1.className;
var bg_2 = slide_2.className;
var bg_3 = slide_3.className;
var bg_4 = slide_4.className;
var bg_5 = slide_5.className;
var bg_6 = slide_6.className;
var bg_7 = slide_7.className;
var bg_8 = slide_8.className;


function animate() {

	setTimeout(function(){
	  slide_1.className = bg_1 + " head-animate-1";
	},1000);

	setTimeout(function(){
	  slide_1.className = bg_1 + " head-animate-1-hide";
	},2000);

	setTimeout(function(){
	  slide_2.className = bg_2 + " head-animate-2";
	},3000);

	setTimeout(function(){
	  slide_2.className = bg_2 + " head-animate-2-hide";
	},4000);

	setTimeout(function(){
	  slide_3.className = bg_3 + " item1-animate";
	},5000);

	setTimeout(function(){
	  slide_4.className = bg_4 + " icon-animate";
	},5000);

	setTimeout(function(){
	  slide_6.className = bg_6 + " text-animate";
	},5000);

	setTimeout(function(){
	  slide_4.className = bg_4 + " icon-animate-hide";
	},6000);

	setTimeout(function(){
	  slide_6.className = bg_6 + " text-animate-hide";
	},6000);

	setTimeout(function(){
	  slide_5.className = bg_5 + " icon-animate";
	},7000);

	setTimeout(function(){
	  slide_7.className = bg_7 + " text-animate";
	},7000);

	setTimeout(function(){
	  slide_8.className = bg_8 + " slide-2-animate";
	},8000);

}


animate();


