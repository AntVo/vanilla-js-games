
const canvas = document.getElementById("tetris");
const ctx = canvas.getContext('2d');

const HEIGHT = 500;
const WIDTH = 250;
const TILESIZE = 25;
let blockColor = "yellow";
let curBlock = [{x: 75, y: 0}, {x: 100, y: 0}, {x: 125, y: 0}, {x: 150, y: 0}];
var gameTimer = setInterval(update, 100);
var gravity = setInterval(gravity, 700);
// 0 is empty, 1 is solifided blocks.

// solidified block as an array of coordinates.
let solidifiedBlock = [ {x: 150, y: 475}, {x: 175, y: 475}, {x: 200, y: 475}, {x: 225, y: 475},];

let blocks = [
	//square
	[{x: 75, y: 0}, {x: 100, y: 0}, {x: 75, y: 25}, {x: 100, y: 25}],

	// _|_
	[{x: 75, y: 25}, {x: 100, y:0 }, {x: 100, y: 25}, {x: 125, y:25}]

	// L 
	[{x: 75, y: 0},ow to c

]




document.onkeydown = function(e){
	switch (e.code){

		case "ArrowUp":
			e.preventDefault();
			break;

		case "ArrowDown":
			e.preventDefault();
			break;

		case "ArrowLeft":
			var bool = false;
			curBlock.forEach((tile) => {
				if (tile.x === 0)
					bool = true;
			})
			if (bool === false){
				curBlock.forEach((tile) => {
					tile.x -= 25;
				})
			}
			break;

		case "ArrowRight":
			var bool = false;
				curBlock.forEach((tile) => {
					if (tile.x === 225)
						bool = true;
				})
				if (bool === false){
					curBlock.forEach((tile) => {
						tile.x += 25;
					})
				}
				break;
	}
}

function drawBlock(){
	ctx.fillStyle = blockColor;
	ctx.strokeStyle = 'rgb(0,0,0)';
	curBlock.forEach((tile) => {
		ctx.fillRect(tile.x, tile.y, TILESIZE, TILESIZE);
		ctx.strokeRect(tile.x, tile.y, TILESIZE, TILESIZE);
	})
}

function drawSolidifiedBlocks(){
	ctx.fillStyle = 'rgb(20, 60, 160)';
	ctx.strokeStyle = 'rgb(0,0,0)';
	solidifiedBlock.forEach((tile) => {
		ctx.fillRect(tile.x, tile.y, TILESIZE, TILESIZE);
		ctx.strokeRect(tile.x, tile.y, TILESIZE, TILESIZE);
	})
}


function gravity(){

	if (checkCollisions(curBlock) === false){
		curBlock.forEach((tile) => {
			tile.y += 25;
		})
	}
	else {
		curBlock.forEach((tile) => {
			solidifiedBlock.push(tile);
		})
		getNewBlock();
	} 

}

function checkCollisions(tiles){
	var bool = false;
	solidifiedBlock.forEach((tile) => {
		tiles.forEach((block) => {
			if (block.x === tile.x && block.y === tile.y-TILESIZE || block.y >= 475){
				bool = true;
			}
		})
	})
	return bool;
}

function checkClears(){

}

function getNewBlock(){
	var rand = Math.floor(Math.random()*2);
	curBlock = 	JSON.parse(JSON.stringify(blocks[rand]));
}



function update(){
	ctx.fillStyle = 'rgb(200, 200, 200)';
	ctx.strokeStyle = 'rgb(0,0,0)';
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	ctx.strokeRect(0,0, WIDTH, HEIGHT);
	// If collision, check lines clears, create new block
	  //  draw solidified blocks.
	  drawSolidifiedBlocks();
    //  draw current block
    drawBlock();
    //  move current block
}
