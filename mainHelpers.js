function initGlobals() {
	player1 = new Player(200, 540, BLUE, 65, 68, 87);
	player2 = new Player(600, 540, RED, 37, 39, 38);
	player3 = new Player(400, 540, BROWN, 74, 76, 73);

	platform1 = new Platform(400, 450, 200);
	platform2 = new Platform(200, 300, 150);
	platform3 = new Platform(500, 200, 250);

	borderMap = new Border(0, 0, width, 20); // Roof
	borderMap2 = new Border(0, 0, 20, height); // Left Wall
	borderMap3 = new Border(780, 0, 20, height); // Right Wall
	borderMap4 = new Border(0, 580, width, 20); // Floor

	gameState = "start"; // or "gameOn" or "gameOver"
}

function gameOn() {
	moveGameObjects();
	playerCollsion();
	checkPcollsion();
	checkWcollsion();

	// DRAW
	background(bg);
	drawGameObjects();
}

function gameOver() {
	setup();
}

function moveGameObjects() {
	player1.move();
	player2.move();
	player3.move();

	platform1.move();
	platform2.move();
	platform3.move();
}

function drawGameObjects() {
	player1.show();
	player2.show();
	player3.show();

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

function leaderboard() {
	if (score > best1) {
	  leader1 = (name + ": " + score)
	  leader2 = (name1 + ": " + best1)
	  leader3 = (name2 + ": " + best2)
	  leader4 = (name3 + ": " + best3)
	  leader5 = (name4 + ": " + best4)
  
	  text("Leaderboards", width - 600, height - 500);
	  text("HISCORE1: " + leader1, width - 600, height - 450);
	  text("HISCORE2: " + leader2, width - 600, height - 400);
	  text("HISCORE3: " + leader3, width - 600, height - 350);
	  text("HISCORE4: " + leader4, width - 600, height - 300);
	  text("HISCORE5: " + leader5, width - 600, height - 250);
  
	  name5 = name4
	  name4 = name3
	  name3 = name2
	  name2 = name1
	  name1 = name
  
	  best5 = best4
	  best4 = best3
	  best3 = best2
	  best2 = best1
	  best1 = score
  
  
	} else if (score > best2) {
	  leader1 = (name1 + ": " + best1)
	  leader2 = (name + ": " + score)
	  leader3 = (name2 + ": " + best2)
	  leader4 = (name3 + ": " + best3)
	  leader5 = (name4 + ": " + best4)
  
	  text("Leaderboards", width - 600, height - 500);
	  text("HISCORE1:" + leader1, width - 600, height - 450);
	  text("HISCORE2:" + leader2, width - 600, height - 400);
	  text("HISCORE3:" + leader3, width - 600, height - 350);
	  text("HISCORE4:" + leader4, width - 600, height - 300);
	  text("HISCORE5:" + leader5, width - 600, height - 250);
  
	  name5 = name4
	  name4 = name3
	  name3 = name2
	  name2 = name
	  name1 = name1
  
	  best5 = best4
	  best4 = best3
	  best3 = best2
	  best2 = score
	  best1 = best1
  
	} else if (score > best3) {
	  leader1 = (name1 + ": " + best1)
	  leader2 = (name2 + ": " + best2)
	  leader3 = (name + ": " + score)
	  leader4 = (name3 + ": " + best3)
	  leader5 = (name4 + ": " + best4)
  
	  text("Leaderboards", width - 600, height - 500);
	  text("HISCORE1:" + leader1, width - 600, height - 450);
	  text("HISCORE2:" + leader2, width - 600, height - 400);
	  text("HISCORE3:" + leader3, width - 600, height - 350);
	  text("HISCORE4:" + leader4, width - 600, height - 300);
	  text("HISCORE5:" + leader5, width - 600, height - 250);
  
	  name5 = name4
	  name4 = name3
	  name3 = name
	  name2 = name2
	  name1 = name1
  
	  best5 = best4
	  best4 = best3
	  best3 = score
	  best2 = best2
	  best1 = best1
  
	} else if (score > best4) {
	  leader1 = (name1 + ": " + best1)
	  leader2 = (name2 + ": " + best2)
	  leader3 = (name3 + ": " + best3)
	  leader4 = (name + ": " + score)
	  leader5 = (name4 + ": " + best4)
  
	  text("Leaderboards", width - 600, height - 500);
	  text("HISCORE1:" + leader1, width - 600, height - 450);
	  text("HISCORE2:" + leader2, width - 600, height - 400);
	  text("HISCORE3:" + leader3, width - 600, height - 350);
	  text("HISCORE4:" + leader4, width - 600, height - 300);
	  text("HISCORE5:" + leader5, width - 600, height - 250);
  
	  name5 = name4
	  name4 = name
	  name3 = name3
	  name2 = name2
	  name1 = name1
  
	  best5 = best4
	  best4 = score
	  best3 = best3
	  best2 = best2
	  best1 = best1
  
	} else if (score > best5) {
	  leader1 = (name1 + ": " + best1)
	  leader2 = (name2 + ": " + best2)
	  leader3 = (name3 + ": " + best3)
	  leader4 = (name4 + ": " + best4)
	  leader5 = (name + ": " + score)
  
	  text("Leaderboards", width - 600, height - 500);
	  text("HISCORE1:" + leader1, width - 600, height - 450);
	  text("HISCORE2:" + leader2, width - 600, height - 400);
	  text("HISCORE3:" + leader3, width - 600, height - 350);
	  text("HISCORE4:" + leader4, width - 600, height - 300);
	  text("HISCORE5:" + leader5, width - 600, height - 250);
  
	  name5 = name
	  name4 = name4
	  name3 = name3
	  name2 = name2
	  name1 = name1
  
	  best5 = score
	  best4 = best4
	  best3 = best3
	  best2 = best2
	  best1 = best1
  
	} else {
	  leader1 = (name1 + ": " + best1)
	  leader2 = (name2 + ": " + best2)
	  leader3 = (name3 + ": " + best3)
	  leader4 = (name4 + ": " + best4)
	  leader5 = (name5 + ": " + best5)
  
	  text("Leaderboards", width - 600, height - 500);
	  text("HISCORE1:" + leader1, width - 600, height - 450);
	  text("HISCORE2:" + leader2, width - 600, height - 400);
	  text("HISCORE3:" + leader3, width - 600, height - 350);
	  text("HISCORE4:" + leader4, width - 600, height - 300);
	  text("HISCORE5:" + leader5, width - 600, height - 250);
	}
	gameState = "gameDone"
  }