var canvas, backgroundImage, playerCount, database, allPlayers;
var gameState = 0;
var distance = 0;
var form, player, game;

function setup(){
    canvas = createCanvas(500,500);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if  (playerCount === 4) {
        game.update(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
}   