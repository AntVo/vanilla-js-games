// set up

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var HEIGHT = canvas.height;
var WIDTH = canvas.width;
var tileSize = 25;
var	snake = [{x: 250, y: 250}, {x:250, y:225}, {x:250, y:200}];
var food = {x: 400, y: 400};
// Snake Velocity
var dx = 25
var dy = 0

// Game Timer
var timer = setInterval(updateGame, 100);

document.onkeydown = function(e){
	switch (e.keyCode){
		case 37:
			dx = -25;
			dy = 0;
			break;
		case 38:
			dy = -25;
			dx = 0;
			break;
		case 39:
			dx = 25;
			dy = 0;
			break;
		case 40:
			dx = 0;
			dy = 25;
			break;
		}
}

function moveSnake(){
	 const head = {x: snake[0].x + dx, y: snake[0].y + dy};
   snake.unshift(head);
   snake.pop();
}

function drawSnake(){
	snake.forEach((node) => {
		context.fillStyle = 'rgb(50, 120, 40)';
  	context.strokeStyle='rgb(100, 240, 80)';
  	context.fillRect(node.x, node.y, 25, 25);
		context.strokeRect(node.x, node.y, 25, 25);
	})
}

function drawFood(){
	context.fillStyle = 'rgb(120, 10, 10)';
	context.strokeStyle = 'rgb(210, 100, 100)';
	context.fillRect(food.x, food.y, 25, 25);
	context.strokeRect(food.x, food.y, 25, 25);
}

function isFoodEaten(){
	if (snake[0].x == food.x && snake[0].y == food.y){
		food.x = Math.floor(Math.random() * (HEIGHT/25)) * 25;
		food.y = Math.floor(Math.random() * (WIDTH/25)) * 25;
		// Grow Snake
		const tailNode = {x: snake[snake.length-1].x + dx, y: snake[snake.length-1].y + dy };
		snake.push(tailNode);
	}
}

function checkCollisions(){
	//walls
	var x = snake[0].x;
	var y = snake[0].y;
	var collisionDetected = false;

	if ((x <= 0 || x >= WIDTH || y <= 0 || y >= HEIGHT)){
			collisionDetected = true;
	}
	snake.slice(1, snake.length).forEach((node) => {
		if (node.x == x && node.y == y ){
			collisionDetected = true;
		}
	})

	return collisionDetected;

}

function updateGame(){
	context.fillStyle = 'rgb(180, 185, 200)';
  context.strokeStyle='black';
	context.fillRect(0, 0, WIDTH, HEIGHT);
	context.strokeRect(0,0, WIDTH, HEIGHT);
	if (checkCollisions() == true){
		clearInterval(timer);
	}
	isFoodEaten();
	moveSnake();
	drawSnake();
	drawFood();

	// Check for Collission
	// Move the Snake
	// Draw Snake on Canvas
}