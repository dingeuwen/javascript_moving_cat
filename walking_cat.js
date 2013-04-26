
// add 4 buttons that will trigger events to start, go faster, go slower, and stop. 

var objectid = "";
var speed = 15;

var img = document.getElementById('catty');
img.style.position="absolute";
img.style.left = "0px";
max = document.width - img.width;


function move_right(){
	if(parseInt(img.style.left, 10) <= max){
		img.style.left = (parseInt(img.style.left, 10) + speed) + 'px';
	} else if(parseInt(img.style.left, 10) >= max) {
		clearInterval(objectid);
		objectid = setInterval(move_left, 50);
	}
}

function move_left(){
	if(parseInt(img.style.left, 10) >= 0){
		img.style.left = (parseInt(img.style.left, 10) - speed) + 'px';
	} else if(parseInt(img.style.left, 10) <= 0) {
		clearInterval(objectid);
		objectid = setInterval(move_right, 50);
	}
}

// var timer = setInterval(move_right, 50);

var start_button = document.getElementById('start');
var faster_button = document.getElementById('faster');
var slower_button = document.getElementById('slower');
var stop_button = document.getElementById('stop');

start_button.onclick = function(){ objectid = setInterval(move_right, 50);};
stop_button.onclick = function() { clearInterval(objectid); };
faster_button.onclick = function(){ speed += 10; };






// var timer = setInterval(function(){
// 	move();}, 50);

// // this javascript program works to mess with googles homepage via the DOM.

// var img = document.getElementById('hplogo');
// img.style.opacity = 1;


// function fadeOut(){
// 	if(img.style.opacity <= 0) {
// 		return;
// 	}
// 	img.style.opacity -= 0.01;
// }

// var time = setInterval(fadeOut, 10);


// function animate(){
// 	if(img.width >= 600) {
// 		return;
// 	}
// 	img.width += 3;
// }

// var timer = setInterval(animate, 41.67);
// var stopMoving = function(){clearInterval(timer);};
// setTimeout(stopMoving, 2000);