//$(document).ready(function() {

// variables
var wins = wins;
var losses = losses;
var yourScore = yourScore;
var button = button;
var minNumber = 19;
var maxNumber = 120;
var randomNumber = randomNumberFromRange(minNumber, maxNumber);

var minNumberGem = 1;
var maxNumberGem = 12;
var randomNumberGem = randomNumberFromRange(minNumberGem, maxNumberGem);


function randomNumberFromRange(min,max) {
    return Math.floor(Math.random() * (max-min+1)+min);
}

console.log(randomNumber);

// event listener???
//$("button").click(randomNumberGem() {
//    alert (randomNumberGem);
//});

// console.log(randomNumberGem);
// should also display in the Random Number section of the page

//  ------ pseudo code ------------
// should display in appropriate area of the screen
    // randomNumber, userScore, wins, losses

// funtion should run whenever the users clicks a gem
    //each gem randomly chooses a # between 1-12, 
        //display 1st click# in Your Score, 
        //capture that number to use in function
        //add to the yourScore the number of each additional Gem click
        //capture that number to use in fuction
        //&& display new # in Your Score, until the user either matches the randomNumber, or goes over
    //if userNumber > randomNumber = lose
        //increase losses by 1
        //display "you lose"
    //if userNumber === randomNumber = win
        //increase wins by 1
        //display "you win"
    //reset - new randomNumber and yourScore=0 

// funtions for the game conditionals
    // function win() {show text "You win!"}
    // function button click {}
    // function add to yourScore until userScore === randomNumber or userScore > randomNumber
    // function lose() {show text "You lose"}
    // reset randomNumber
    // reset yourScore to 0

// Conditions that determine the outcome of the Game
    
    //if (randomNumber === userScore) {
      // win();     }
   
    //else if (randomNumber < userScore) {
      //  lose();     }

    // console.log(userScore);
    // console.log(randomNumber);
    //}

//$("#random-Number").html("Random Number: " + randomNumber);
//$("#user-score").html("Your Score: " + userScore);
//$("#wins").html("Wins: " + wins);
//$("#losses").html("Losses: " + wins);