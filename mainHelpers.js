function initGlobals() {
	player1 = new Player(200, 540, BLUE, 65, 68, 87);
	player2 = new Player(600, 540, RED, 37, 39, 38);

	platform1 = new Platform(400, 450, 200);
	platform2 = new Platform(200, 300, 150);
	platform3 = new Platform(500, 200, 250);

	borderMap = new Border(0, 0, width, 20); // Roof
	borderMap2 = new Border(0, 0, 20, height); // Left Wall
	borderMap3 = new Border(780, 0, 20, height); // Right Wall
	borderMap4 = new Border(0, 580, width, 20); // Floor
}

function moveGameObjects() {
	player1.move();
	player2.move();

	platform1.move();
	platform2.move();
	platform3.move();
}

function drawGameObjects() {
	player1.show();
	player2.show();

	platform1.show();
	platform2.show();
	platform3.show();

	borderMap.show();
	borderMap2.show();
	borderMap3.show();
	borderMap4.show();
}

function checkPcollsion() {
	checkPlatformCollision(player1);
	checkPlatformCollision(player2);
}

function checkWcollsion() {
	checkBorderCollision(player1);
	checkBorderCollision(player2);
}

function checkPlatformCollision(aPlayer) {
	// Check Player
	if (rectIntersect(aPlayer, platform1) && aPlayer.ySpeed > 0) {
		platform1.topCol = aPlayer.col;
		aPlayer.y = platform1.y - aPlayer.h;
		aPlayer.ySpeed = 0;
	} else if (rectIntersect(aPlayer, platform2) && aPlayer.ySpeed > 0) {
		platform2.topCol = aPlayer.col;
		aPlayer.y = platform2.y - aPlayer.h;
		aPlayer.ySpeed = 0;
	} else if (rectIntersect(aPlayer, platform3) && aPlayer.ySpeed > 0) {
		platform3.topCol = aPlayer.col;
		aPlayer.y = platform3.y - aPlayer.h;
		aPlayer.ySpeed = 0;
	}
}

function checkBorderCollision(aPlayer) {
	// Check Player
	if (rectIntersect(aPlayer, borderMap4) && aPlayer.ySpeed > 0) {
		// Floor
		aPlayer.y = borderMap4.y - aPlayer.h;
		aPlayer.ySpeed = 0;
	} else if (rectIntersect(aPlayer, borderMap3)) {
		// Right Wall
		aPlayer.x = borderMap3.x - aPlayer.w;
	} else if (rectIntersect(aPlayer, borderMap2)) {
		// Left Wall
		aPlayer.x = borderMap2.x + aPlayer.w;
	} else if (rectIntersect(aPlayer, borderMap)) {
		// Roof
		aPlayer.y = borderMap.y + aPlayer.h;
		aPlayer.ySpeed += aPlayer.a;
	}
}

function playerCollsion() {
	// Check Player
	if (rectIntersect(player1, player2)) {
		player2.freeze = true;
	}
}
