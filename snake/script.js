// set up

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var HEIGHT = canvas.height;
var WIDTH = canvas.width;
var tileSize = 25;
var timer = setInterval(updateGame, 500);

context.fillStyle = 'rgb(75, 75, 75)';
context.fillRect(0, 0, WIDTH, HEIGHT);



function Snake(){
	this.head = null;
	this.direction = "RIGHT";
	this.length = 4;
}

function Food(){
	this.x = Math.floor(Math.random() * 20 ) * 25;
	this.y = Math.floor(Math.random() * 20 ) * 25;
	this.randomizeCoordinates = function(){
		this.x = Math.floor(Math.random() * 20 ) * 25;
		this.y = Math.floor(Math.random() * 20 ) * 25;

	}
}

function updateGame(){

	console.log('updating');
	// Check for Collission
	// Move the Snake
	// Draw Snake on Canvas
}