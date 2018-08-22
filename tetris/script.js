
const canvas = document.getElementById("tetris");
const ctx = canvas.getContext('2d');

const HEIGHT = 500;
const WIDTH = 250;
const TILESIZE = 25;
const timer = setInterval(update, 200);
const grid = [];



function update(){
	ctx.fillStyle = 'rgb(200, 200, 200)';
	ctx.strokeStyle = 'rgb(0,0,0)';
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	ctx.strokeRect(0,0, WIDTH, HEIGHT);
}
