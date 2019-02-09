// Start Button Control

// Assigns CSS class 'start-button' to the JS variable startBtn 
const startBtn = document.getElementById('start-button');

// Start-button actions when clicked
startBtn.onclick = function() {
    // Hides the start button
    document.getElementById('start-button').style.display = 'none';
    // Shows the score container
    document.getElementById('scores-container').style.display = 'inline-flex';
    // shows the buttons container for user prompt
    document.getElementById('buttons-container').style.display = 'flex';
};

// Once player input received hide player choice buttons
const playerChoice = document.getElementById('rpsbutton');

// Define a fucntion to store player input

function playerInput() {

}

// Define a funciton to hide the choice buttons

// Define a function to make players choice

// Radio button actions on click
playerChoice.onclick = function() {
    // Hides player buttons;
    document.getElementsByName('buttons-container').style.display = 'none';
    // Shows player vs computer container
    document.getElementById('pvsc-container').style.display = 'flex';
};