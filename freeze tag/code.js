// JUMPING PLAYER

// Declare Global Variables
let player1, player2, player3;
let platform1, platform2, platform3;
let borderMap, borderMap2, borderMap3, borderMap4;

let timer = 0;

var gameState;
var gameOverTimer;
var stahp = 0;
var score;
var scTime = 0;
var best = 0;
var best1 = 0;
var best2 = 0;
var best3 = 0;
var best4 = 0;
var best5 = 0;
var name;
var name1 = "guy";
var name2 = "guy";
var name3 = "guy";
var name4 = "guy";
var name5 = "guy";
var leader1;
var leader2;
var leader3;
var leader4;
var leader5;

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";
let BLACK = 0;
let bg = GREEN;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);
	background(bg);

	// Initialize Global Variables
	initGlobals();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	if (gameState == "start") {
		drawGameObjects();
	} else if (gameState == "gameOn") {
		gameOn();
	} else if (gameState == "gameOver") {
		gameOver();
	}
	scoreTime();
}

// EVENT FUNCTIONS
function keyPressed() {
	player1.jump();
	player2.jump();
	player3.jump();
}

function mousePressed() {
	if (gameState == "start") {
		gameState = "gameOn";
	} else if (gameState == "gameDone") {
		initGlobals();
	}
}