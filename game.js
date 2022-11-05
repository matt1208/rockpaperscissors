var name = window.prompt("Please enter your name?");
document.write(name + ", Welcome to Rock Paper Scissors!");
var option = ["Rock", "Paper", "Scissors"];
var player = "";
var computerResult = "";
var rock = "Rock";
var scissors = "Scissors";
var paper = "Paper";
var winner = "";
var gameCount = 0;

function playerChoice() {
    if(document.getElementById('rock').checked) {
        player = "Rock";
    } else if(document.getElementById("paper").checked) {
        player = "Paper";
    } else {
        player = "Scissors";
    }
}

function play() {
    playerChoice();
    var random = Math.floor(Math.random()*3);
    computerResult = option[random];
    gameCount++;
    document.getElementById("historysection").innerHTML = gameCount;
    document.getElementById("computerOutput").innerHTML = computerResult;
    document.getElementById("userSelected").innerHTML = player;
    document.getElementById("computerSelected").innerHTML = computerResult;
    compare(player, computerResult);
    document.getElementById("result").innerHTML = "The winner is: " + winner;
}

function compare(player, computerResult) {
    if (player === rock) {
        if(computerResult === paper) {
            winner = "Computer";
        } else if (computerResult === rock) {
            winner = "Tie";
        } else {
            winner = "Player";
        }
    }
    if (player === paper) {
        if(computerResult === scissors) {
            winner = "Computer";
        } else if (computerResult === paper) {
            winner = "Tie";
        } else {
            winner = "Player";
        }
    }
    if (player === scissors) {
        if(computerResult === rock) {
            winner = "Computer";
        } else if (computerResult === scissors) {
            winner = "Tie";
        } else {
            winner = "Player";
        }
    }
}