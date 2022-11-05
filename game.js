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
var compRock = 0;
var compPaper = 0;
var compScissors = 0;

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
    // Decide Comp
    var random = Math.floor(Math.random()*3);
    computerResult = option[random];
    // Update Game Count
    gameCount++;
    document.getElementById("historysection").innerHTML = gameCount;
    // Display selections
    document.getElementById("computerOutput").innerHTML = computerResult;
    document.getElementById("userSelected").innerHTML = player;
    document.getElementById("computerSelected").innerHTML = computerResult;
    // Get Winner
    compare(player, computerResult);
    document.getElementById("result").innerHTML = "The winner is: " + winner;
    // Computer Choices
    compChoiceCalc(computerResult);
    document.getElementById("rocksection").innerHTML = compRock;
    document.getElementById("papersection").innerHTML = compPaper;
    document.getElementById("scissorssection").innerHTML = compScissors;
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

function compChoiceCalc(computerResult) {
    if(computerResult === "Rock") {
        compRock++;
    } else if(computerResult === "Paper"){
        compPaper++;
    } else {
        compScissors++;
    }
}