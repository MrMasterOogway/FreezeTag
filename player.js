// Player 1 Functions
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 20;
    this.xSpeed = 5;
    this.ySpeed = 0;
    this.a = 1;
    this.col = "white";
  }
  move() {
    // Move Horizontally on Key is Down
    if (keyIsDown(LEFT_ARROW)) {
      player1.x += -player1.xSpeed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      player1.x += player1.xSpeed;
    }

    // Move Vertically - Gravity
    player1.y += player1.ySpeed; // Move Vertically
    player1.ySpeed += player1.a; // Apply Gravity
    if (player1.y + player1.h > height) {
      // Land on Ground
      player1.y = height - player1.h;
    }
  }
  show() {
    // Draw Player
    noStroke();
    fill(player1.col);
    rect(player1.x, player1.y, player1.w, player1.h);
  }
  jump() {
    // Jump on UP_ARROW
    if (keyCode == UP_ARROW) {
      player1.ySpeed = -20;
    }
  }
}