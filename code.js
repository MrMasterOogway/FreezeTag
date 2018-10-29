// JUMPING PLAYER

// Declare Global Variables
let player1 = new Player(200, 580);

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
  createCanvas(800, 600);

  // Initialize Global Variables
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
  // LOGIC
  player1.move();

  // DRAW
  background(80);
  player1.show();

}

// EVENT FUNCTIONS
function keyPressed() {
  player1.jump();
}

