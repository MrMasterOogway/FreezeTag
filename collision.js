function checkCollision() {
    // Check for collision w/ ceiling & floor
    if (player1.y > 581) {
        player1.y = 580;
    }
    if (player1.y < 0) {
        player1.y = 1;
    }
    if (player1.x > 781) {
        player1.x = 780;
    }
    if (player1.x < 0) {
        player1.x = 1;
    }
    // Check collision with players
    
    if (player1.x > player2.x && player1.x < player2.x + player2.w &&
      player1.y + 20 > player2.y && player1.y - 20 < player2.y + player2.h) {
          player2.freeze = true
      }

      if (player1.x > player3.x && player1.x < player3.x + player3.w &&
        player1.y + 20 > player3.y && player1.y - 20 < player3.y + player3.h) {
            player3.freeze = true
        }

        if (player1.x > player4.x && player1.x < player4.x + player4.w &&
            player1.y + 20 > player4.y && player1.y - 20 < player4.y + player4.h) {
                player4.freeze = true
            }

    // if (heli.x + 34 > wall2.x && heli.x < wall2.x + wall2.w &&
    //   heli.y + 20.5 > wall2.y && heli.y - 20.5 < wall2.y + wall2.h) {
    //   shield = shield - 1;
    //   wall2.y = wall2.y + 1000;
    // }

}