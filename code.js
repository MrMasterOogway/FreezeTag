// JUMPING PLAYER

// Declare Global Variables
let player1, player2;
let platform1, platform2, platform3;

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	initGlobals();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	moveGameObjects();
	playerCollsion();
	checkPcollsion();
	checkWcollsion();

	// DRAW
	background(GREEN);
	drawGameObjects();
}

// EVENT FUNCTIONS
function keyPressed() {
	player1.jump();
	player2.jump();
}