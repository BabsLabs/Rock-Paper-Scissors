// Variables from HTML Ids
const start = document.getElementById('start-button');
const scoreBox = document.getElementById('scores-container');
const btns = document.getElementById('buttons-container');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const match = document.getElementById('pvsc-container');
let playerImg = document.getElementById('player-img');
let compImg = document.getElementById('comp-img');
const matchImg = document.getElementsByClassName('match-img');
let prntPlayerScore = document.getElementById('player-score');
let prntCompScore = document.getElementById('computer-score');

// Score variables
playerScore = 0;
compScore = 0;

// Start game function
start.addEventListener('click', function() {
    // Hides start button
    this.style.display = 'none';
    // Shows score box
    scoreBox.style.display = 'inline-flex';
    // shows user choice buttons
    btns.style.display = 'inline';
    // reset scores
    playerScore = 0;
    compScore = 0;
})

// Functions to listen for the player choice

// Player choice variables
let playerChoice;

// RPS Button event listeners
rock.addEventListener('click', () => {
    playerChoice = 'rock';
    playerImg.src = 'https://raw.githubusercontent.com/BabsLabs/Rock-Paper-Scissors/master/Rock.png';
});

paper.addEventListener('click', () => {
    playerChoice = 'paper';
    playerImg.src = 'https://raw.githubusercontent.com/BabsLabs/Rock-Paper-Scissors/master/Paper.png';
});

scissors.addEventListener('click', () => {
    playerChoice = 'scissors';
    playerImg.src = 'https://raw.githubusercontent.com/BabsLabs/Rock-Paper-Scissors/master/Scissors.png';
});

// Start match vs computer upon player choice
btns.addEventListener('click', () => {
    btnHider();
    getCompChoice();
    checkMatch();
});

// Function to hide buttons and show match
function btnHider() {
    btns.style.display = 'none';
    match.style.display = 'flex';
};


// Calculate computer choice
let compChoice;

// Computer choice function
function getCompChoice() {
    // Gets whole number between 1 and 3 (okay betwwen 0 and 2)
    compChoice = Math.floor(Math.random() * 3);
    // Assigns the random numer to a string for later camparison with the player choice
    if (compChoice == 0) {
        compChoice = 'rock';
        compImg.src = 'https://raw.githubusercontent.com/BabsLabs/Rock-Paper-Scissors/master/Rock.png';
    } else if (compChoice == 1) {
        compChoice = 'paper';
        compImg.src = 'https://raw.githubusercontent.com/BabsLabs/Rock-Paper-Scissors/master/Paper.png';
    } else if (compChoice == 2) {
        compChoice = 'scissors';
        compImg.src = 'https://raw.githubusercontent.com/BabsLabs/Rock-Paper-Scissors/master/Scissors.png';
    }
    console.log(playerChoice + " " + compChoice);
};

// Check the player choice vs the comp choice

// Delay the Alert window


// Function to check game result
function checkMatch() {
    // Check for tie game
    if (playerChoice == compChoice) {
        alert('Tie Game!');
        // Check for player or computer win options 
    } else if (playerChoice == 'rock' && compChoice == 'scissors') {
        alert('Player Wins!');
        playerScore++;
    } else if (playerChoice == 'paper' && compChoice == 'scissors') {
        alert('Computer Wins!');
        compScore++;
    } else if (playerChoice == 'scissors' && compChoice == 'rock') {
        alert('Computer Wins!');
        compScore++;
    } else if (playerChoice == 'paper' && compChoice == 'rock') {
        alert('Player Wins!');
        playerScore++;
    } else if (playerChoice == 'scissors' && compChoice == 'paper') {
        alert('Player Wins!');
        playerScore++;
    } else if (playerChoice == 'rock' && compChoice == 'paper') {
        alert('Computer Wins!');
        compScore++;
    }

    console.log(playerScore + " " + compScore);
    prntPlayerScore.innerHTML = playerScore;
    prntCompScore.innerHTML = compScore;
};