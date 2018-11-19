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
	score = 0;
}

function gameOn() {
	moveGameObjects();
	playerCollsion();
	checkPcollsion();
	checkWcollsion();

	// DRAW
	background(bg);
	drawGameOn();
}

function gameOver() {
	bestscore();
}

function bestscore() {
	if (stahp < 1) {
	  stahp = 1
	  name = prompt("Enter your name:");
	}
	if (score > best) {
	  best = score;
	}
	gameState = "leaderboard"
	leaderboard();
  }

  function scoreTime() {
	  setInterval(atScore, 1000)
  }

  function atScore() {
	  score = scTime + 1;

	  if (score = 500) {
		  setup();
	  }
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
	fill(255);
	textSize(42);
	text("CLICK TO START!", width - 600, height - 200);
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

function drawGameOn() {
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
	setTimeout(initGlobals, 5000);
}