//Code made by Ahmad

function computerPlay() {
    //create a variable where we can have 3 different choices of hand
    let computerHand = ['rock', 'paper' , 'scissors'];
    //use a random function to choose randomly between these 3 hands nad put it into another variable
    let handChoice = Math.floor(Math.random()*3);
    return computerHand[handChoice]
}

function playerSelection() {
    //same like computer but we have an input from user/player
    //create a variable to player hand
    let playerHand = ['rock', 'paper' , 'scissors'];
    //user input a number from 1-3 to choose his weapons, where 1-rock 2-paper 3-scissors, create a varibale to store this data
    let userInput = prompt('Choose your weapons of luck where 0-rock 1-paper 2-scissors' );
    //change it into integer and put it into player hand
    userInput = parseInt(userInput);
    //change the number into rock paper scissors, so we create an array of 

    return playerHand[userInput]
}