
var slide_1 = document.getElementById("animate-1");
var slide_2 = document.getElementById("animate-2");
var slide_3 = document.getElementById("animate-3");
var slide_4 = document.getElementById("animate-4");
var slide_5 = document.getElementById("animate-5");
var slide_6 = document.getElementById("animate-6");
var slide_7 = document.getElementById("animate-7");
var slide_8 = document.getElementById("animate-8");
var slide_9 = document.getElementById("animate-9");
var slide_10 = document.getElementById("slide-2");
var slide_11 = document.getElementById("slide-1");


var bg_1 = slide_1.className;
var bg_2 = slide_2.className;
var bg_3 = slide_3.className;
var bg_4 = slide_4.className;
var bg_5 = slide_5.className;
var bg_6 = slide_6.className;
var bg_7 = slide_7.className;
var bg_8 = slide_8.className;
var bg_9 = slide_9.className;
var bg_10 = slide_10.className;
var bg_11 = slide_11.className;


function animate() {

	setTimeout(function(){
	  slide_1.className = bg_1 + " animate-1-animate";
	},1000);
	
	setTimeout(function(){
	  slide_2.className = bg_2 + " animate-2-animate";
	},500);

	setTimeout(function(){
	  slide_3.className = bg_3 + " animate-3-animate";
	},500);

	setTimeout(function(){
	  slide_4.className = bg_4 + " animate-4-animate";
	},1000);	

	setTimeout(function(){
	  slide_5.className = bg_5 + " animate-5-animate";
	},4300);

	setTimeout(function(){
	  slide_6.className = bg_6 + " animate-6-animate";
	},4600);

	setTimeout(function(){
	  slide_7.className = bg_7 + " animate-7-animate";
	},4900);

	setTimeout(function(){
	  slide_8.className = bg_8 + " animate-8-animate";
	},5200);

	setTimeout(function(){
	  slide_9.className = bg_9 + " animate-9-animate";
	},5500);

	setTimeout(function(){
	  slide_1.className = bg_1 + " animate-1-repeat";
	},5000);

	setTimeout(function(){
	  slide_2.className = bg_2 + " animate-2-repeat";
	},5000);

	setTimeout(function(){
	  slide_3.className = bg_3 + " animate-3-repeat";
	},5000);

	setTimeout(function(){
	  slide_4.className = bg_4 + " animate-4-repeat";
	},5000);

	setTimeout(function(){
	  slide_5.className = bg_5 + " animate-5-animate-repeat";
	},8200);

	setTimeout(function(){
	  slide_6.className = bg_6 + " animate-6-animate-repeat";
	},7900);

	setTimeout(function(){
	  slide_7.className = bg_7 + " animate-7-animate-repeat";
	},7600);

	setTimeout(function(){
	  slide_8.className = bg_8 + " animate-8-animate-repeat";
	},7300);

	setTimeout(function(){
	  slide_9.className = bg_9 + " animate-9-animate-repeat";
	},7000);

	setTimeout(function(){
	  slide_10.className = bg_10 + " show";
	},4000);

	setTimeout(function(){
	  slide_10.className = bg_10 + " show-repeat";
	},8500);

	setTimeout(function(){
	  slide_11.className = bg_11 + " slide1-animate";
	},500);

	setTimeout(function(){
	  slide_11.className = bg_11 + " slide1-animate-repeat";
	},4000);


setTimeout(remove,8800);
}


animate();

function remove() {
  slide_1.classList.remove('animate-1-animate');
  slide_2.classList.remove('animate-2-animate');
  slide_3.classList.remove('animate-3-animate');
  slide_4.classList.remove('animate-4-animate');
  slide_5.classList.remove('animate-5-animate');
  slide_6.classList.remove('animate-6-animate');
  slide_7.classList.remove('animate-7-animate');
  slide_8.classList.remove('animate-8-animate');
  slide_9.classList.remove('animate-9-animate');
  slide_10.classList.remove('show');
  slide_10.classList.remove('show-repeat');
  slide_11.classList.remove('slide1-animate');
  slide_1.classList.remove('animate-1-repeat');
  slide_2.classList.remove('animate-2-repeat');
  slide_3.classList.remove('animate-3-repeat');
  slide_4.classList.remove('animate-4-repeat');
  slide_11.classList.remove('slide1-animate-repeat');
  slide_5.classList.remove('animate-5-animate-repeat');
  slide_6.classList.remove('animate-6-animate-repeat');
  slide_7.classList.remove('animate-7-animate-repeat');
  slide_8.classList.remove('animate-8-animate-repeat');
  slide_9.classList.remove('animate-9-animate-repeat');
  slide_10.classList.remove('animate-10-animate');

  animate();
}


