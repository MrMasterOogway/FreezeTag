function initplayers() {
    player1 = {
        x: 600,
        y: 100,
        w: 20,
        h: 20,
        speed: 5,
        col: RED
    };
    player2 = {
        x: 500,
        y: 100,
        w: 20,
        h: 20,
        speed: 5,
        col: GREEN,
        freeze: false
    };
    player3 = {
        x: 200,
        y: 100,
        w: 20,
        h: 20,
        speed: 5,
        col: GREEN,
        freeze: false
    };
    player4 = {
        x: 100,
        y: 100,
        w: 20,
        h: 20,
        speed: 5,
        col: GREEN,
        freeze: false
    };
}

function moveplayers() {
    //player1
    if(keyIsDown(LEFT_ARROW)) {
        player1.x -= player1.speed
    }
    if(keyIsDown(UP_ARROW)) {
        player1.y -= player1.speed
    }
    if(keyIsDown(RIGHT_ARROW)) {
        player1.x += player1.speed
    }
    if(keyIsDown(DOWN_ARROW)) {
        player1.y += player1.speed
    }

    //player2
    if(player2.freeze == false) {
    if(keyIsDown(65)) {
        player2.x -= player2.speed
    }
    if(keyIsDown(87)) {
        player2.y -= player2.speed
    }
    if(keyIsDown(68)) {
        player2.x += player2.speed
    }
    if(keyIsDown(83)) {
        player2.y += player2.speed
    }
}

    //player3
    if(player3.freeze == false) {
    if(keyIsDown(74)) {
        player3.x -= player3.speed
    }
    if(keyIsDown(73)) {
        player3.y -= player3.speed
    }
    if(keyIsDown(76)) {
        player3.x += player3.speed
    }
    if(keyIsDown(75)) {
        player3.y += player3.speed
    }
}

    //player4
    if(player4.freeze == false) {
    if(keyIsDown(100)) {
        player4.x -= player4.speed
    }
    if(keyIsDown(104)) {
        player4.y -= player4.speed
    }
    if(keyIsDown(102)) {
        player4.x += player4.speed
    }
    if(keyIsDown(101)) {
        player4.y += player4.speed
    }
}
}

function drawplayers() {
    noStroke();
    fill(player1.col);
    rect(player1.x, player1.y, player1.w, player1.h);
    fill(player2.col);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    rect(player2.x, player2.y, player2.w, player2.h); 
    rect(player3.x, player3.y, player3.w, player3.h); 
    rect(player4.x, player4.y, player4.w, player4.h); 
}