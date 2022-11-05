var name = window.prompt("Please enter your name?");
document.write(name + ", Welcome to Rock Paper Scissors!");
var option = ["rock", "paper", "scissors"];
var player = "";

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
    var computerOutput = option[random];
    document.getElementById("computerOutput").innerHTML = computerOutput;
    document.getElementById("userSelected").innerHTML = player;


}