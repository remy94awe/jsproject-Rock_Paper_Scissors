//Code made by Ahmad

function computerPlay() {
    //create a variable where we can have 3 different choices of hand
    let computerHand = ['rock', 'paper' , 'scissors'];
    //use a random function to choose randomly between these 3 hands nad put it into another variable
    let handChoice = Math.floor(Math.random()*3);
    return computerHand[handChoice]
}

function playerPlay() {
    //same like computer but we have an input from user/player
    //create a variable to player hand and so we create an array of rock paper scissors
    let playerHand = ['rock', 'paper' , 'scissors'];
    //user input a number from 1-3 to choose his weapons, where 1-rock 2-paper 3-scissors, create a varibale to store this data
    let userInput = prompt('Choose your weapons of luck where 0-rock 1-paper 2-scissors' );
    //change it into integer and put it into player hand
    userInput = parseInt(userInput);
    //change the number into rock paper scissors, 

    return playerHand[userInput]
}

function game(playerSelection, computerSelection) {
    //write conditions to decide who wins
    //rock wins against scissors, paper wins against rock, scissors win against paper and TIE for the same
    //if player weapons is rock, win against scissors, lose against paper, tie against rock
    let matchResult
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            matchResult = win();
        } else if (computerSelection === 'paper') {
            matchResult = lose();
        } else {
            matchResult = tie();
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            matchResult = win();
        } else if (computerSelection === 'scissors') {
            matchResult = lose();
        } else {
            matchResult = tie();
        }
    } else {
        if (computerSelection === 'paper') {
            matchResult = win();
        } else if (computerSelection === 'rock') {
            matchResult = lose();
        } else {
            matchResult = tie();
        }
    }
    return matchResult;  
}

function tie() {
    console.log('Tied! No winner in this match');
    return 'tie'
}

function win() {
    console.log('You win');
    return 'win'
}

function lose() {
    console.log('You lose');
    return 'lose'
}

function currentResult (result) {
    console.log(result);
    console.log('playerScore : ' + playerScore );
    console.log('computerScore : ' + computerScore);
}