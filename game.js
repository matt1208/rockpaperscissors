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
var playerRock = 0;
var playerPaper = 0;
var playerScissors = 0;

function playerChoice() {
    if(document.getElementById('rock').checked) {
        player = "Rock";
    } else if(document.getElementById("paper").checked) {
        player = "Paper";
    } else if(document.getElementById("scissors").checked) {
        player = "Scissors";
    } else {
        window.alert("You must select one to play.");

    }
}

function play() {
    playerChoice();
    // Seeing if the user still hasn't picked and stopping the function
    if(player === ""){
        exitFunc("User must select an option");
    }
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
    // Player Choices
    playerChoiceCalc(player);
    document.getElementById("procksection").innerHTML = playerRock;
    document.getElementById("ppapersection").innerHTML = playerPaper;
    document.getElementById("pscissorssection").innerHTML = playerScissors;
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

function playerChoiceCalc(player) {
    if(player === "Rock") {
        playerRock++;
    } else if(player === "Paper"){
        playerPaper++;
    } else {
        playerScissors++;
    }
}