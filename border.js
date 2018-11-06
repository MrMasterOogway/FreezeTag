class Border {
    // Properties (State)
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.col = GREY;
	}
	// Methods (Behaviour)
	show() {
		noStroke();
		// Main Platform
		fill(this.col);
		rect(this.x, this.y, this.w, this.h);
	}
}