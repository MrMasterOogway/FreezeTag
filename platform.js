class Platform {
	// Properties (State)
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = 20;
		this.col = GREY;
		this.topCol = ORANGE;
		this.xSpeed = 2;
	}

	// Methods (Behaviour)
	show() {
		noStroke();
		// Main Platform
		fill(this.col);
		rect(this.x, this.y, this.w, this.h);
		// Platform Top
		fill(this.topCol);
		rect(this.x, this.y, this.w, 2);
	}

	move() {
		// Move & Bounce Horizontally
		this.x += this.xSpeed;
		if (this.x + this.w > width || this.x < 0) {
			this.xSpeed = -this.xSpeed;
		}
	}
}