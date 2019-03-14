function initialize() {
    // Initialize Global Variables
    initplayers();
    gameState = "start"; // or "gameOn" or "gameOver"
    wall1 = {
      x: 500,
      y: 300,
      w: 50,
      h: 50
    };
    wall2 = {
      x: 750,
      y: 150,
      w: 50,
      h: 50
    };
    wall3 = {
      x: 600,
      y: 400,
      w: 50,
      h: 50
    };
    wall4 = {
      x: 200,
      y: 250,
      w: 50,
      h: 50,
    };
    wallSpeed = 3;
    score = 0;
    text("Best Score: " + best, width / 2, height - 10);
  }
  
  function drawStartScreen() {
    background(140, 197, 66);
    noStroke();
    fill(169, 169, 169)
    fill(player1.col)
    rect(player1.x, player1.y, player1.w, player1.h); // player
    fill(player2.col)
    rect(player2.x, player2.y, player2.w, player2.h); // player
    rect(player3.x, player3.y, player3.w, player3.h); // player
    rect(player4.x, player4.y, player4.w, player4.h); // player
    fill(255);
    textSize(42);
    text("CLICK TO START!", width / 2, height / 2);
    text("Best Score: " + best, width / 2, height - 10);
    stahp = 0;
    score = 0;
  }
  
  function gameOn() {
    // LOGIC
    score++;
    moveplayers();
    drawplayers();
    checkCollision();
    drawGameOn();
    text("Best Score: " + best, width / 2, height - 10);
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