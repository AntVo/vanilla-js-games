// set up

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var HEIGHT = canvas.height;
var WIDTH = canvas.width;
var tileSize = 25;
var	snake = [[250, 250], [250, 225], [250, 200]];
var direction = "up";
var timer = setInterval(updateGame, 200);
context.fillStyle = 'rgb(75, 75, 75)';
context.strokeStyle="green";


document.onkeydown = function(e){
	switch (e.keyCode){
		case 37:
			changeDirection('left');
			break;
		case 38:
			changeDirection('up');
			break;
		case 39:
			changeDirection('right');
			break;
		case 40:
			changeDirection('down');
			break;
		}
}

function moveSnake(){
	 let firstNode = snake[0];
   switch(direction){
   	case "up":
   		firstNode[1] -= tileSize;
   		break;
   	case "down":
   		firstNode[1] += tileSize;
   		break;
   	case "left":
   		firstNode[0] -= tileSize;
   		break;
   	case "right":
   		firstNode[0] += tileSize;
   		break;
   }
   snake.unshift(firstNode);
   snake.pop();
}

function drawSnake(){
	snake.forEach((node) => {
		context.strokeRect(node[0], node[1], 25, 25);
	})
}

function changeDirection(dir){
	direction = dir;
}

function updateGame(){
	context.clearRect(0, 0, WIDTH, HEIGHT);
	context.fillRect(0, 0, WIDTH, HEIGHT);
	context.beginPath();
	moveSnake();
	drawSnake();
	context.closePath();
	// Check for Collission
	// Move the Snake
	// Draw Snake on Canvas
}