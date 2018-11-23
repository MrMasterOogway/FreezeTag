function checkPcollsion() {
	checkPlatformCollision(player1);
	checkPlatformCollision(player2);
	checkPlatformCollision(player3);
}

function checkWcollsion() {
	checkBorderCollision(player1);
	checkBorderCollision(player2);
	checkBorderCollision(player3);
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
	if (rectIntersect(aPlayer, platform1)) {
		aPlayer.y = platform1.y + aPlayer.h;
		aPlayer.ySpeed += aPlayer.a;
	}
	if (rectIntersect(aPlayer, platform2)) {
		aPlayer.y = platform2.y + aPlayer.h;
		aPlayer.ySpeed += aPlayer.a;
	}
	if (rectIntersect(aPlayer, platform3)) {
		aPlayer.y = platform3.y + aPlayer.h;
		aPlayer.ySpeed += aPlayer.a;
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
	// Check Player Freeze
	if (rectIntersect(player1, player2)) {
		player2.freeze = true;
	}
	if (rectIntersect(player1, player3)) {
		player3.freeze = true;
	}

	// Check Player unfreeze
	if (rectIntersect(player2, player3)) {
		player2.freeze = false;
	}

	if (player2.freeze == true && player3.freeze == true) {
		gameState = "gameOver"
	}
}