// declare Global Variables
var player = {};
var gameState;
var gameOverTimer;
var wall1, wall2, wall3, wall4, wallSpeed;
var score;
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
var stahp = 0;
var RED = "#DC143C";
var GREEN = "#00ff08";

// Preload Function - Runs and completes before setup()
// function preload() {
//     player.img = loadImage("assets/heliBlueTransparent.png");
//   }
  
  // SETUP FUNCTION - Runs once at beginning of program
  function setup() {
    createCanvas(800, 600);
    initialize(); // in helpers.js
    imageMode(CENTER);
  }
  
  // DRAW FUNCTION - Loops @ 60FPS by default
  function draw() {
    if (gameState == "start") {
      drawStartScreen(); // in helpers.js
    } else if (gameState == "gameOn") {
      gameOn(); // in helpers.js
    } else if (gameState == "gameOver") {
      gameOver(); // in helpers.js
    }
  }
  
  // Event Functions
  function mousePressed() {
    if (gameState == "start") {
      gameState = "gameOn";
    } else if (gameState == "gameDone") {
      initialize(); // in helpers.js
    }
  }