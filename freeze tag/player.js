// Player 1 Functions
class Player {
	// Properties (State)
	constructor(x, y, col, lk, rk, uk) {
		this.x = x;
		this.y = y;
		this.w = 20;
		this.h = 20;
		this.xSpeed = 5;
		this.ySpeed = 0;
		this.a = 1;
		this.col = col;
		this.leftKey = lk;
		this.rightKey = rk;
		this.upKey = uk;
		this.freeze = false;
	}

	// Methods (Behaviour)
	move() {
		// Move Horizontally on Key is Down
		if (this.freeze == false) {
		if (keyIsDown(this.leftKey)) {
			this.x += -this.xSpeed;
		} else if (keyIsDown(this.rightKey)) {
			this.x += this.xSpeed;
		}

		// Move Vertically - Gravity
		this.ySpeed += this.a; // Apply Gravity
		this.y += this.ySpeed; // Move Vertically
		}
	}

	show() {
		// Draw Player
		noStroke();
		fill(this.col);
		rect(this.x, this.y, this.w, this.h);
	}

	jump() {
		// Jump on UP_ARROW
		if (keyCode == this.upKey && this.ySpeed == 0) {
			this.ySpeed = -20;
		}
	}
}