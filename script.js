// the human player score
let humanScore = 0;

// the computer player score
let computerScore = 0;

// the current round number
let currentRoundNumber = 1;

// generates a random target number for the players 
//  to guess
let generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

// compares the guesses of the human and computer 
// players, checking to make sure that the human players
// guessed number is within the appropriate bounds
let compareGuesses = (human, comp, target) => {
  if(human > 9 || human < 0){
    alert('Please enter a number between 0 and 9.');
  } else {
    let humanDiff = (target - human);
    let compDiff = Math.abs(target - comp);
    if(humanDiff === compDiff){
      return true;
    } else if(humanDiff < compDiff){
      return true;
    } else {
      return false;
    }
  }
  
}

// updates the score on the page depending on the 
//  winner of each round
let updateScore = (winner) => {
  if(winner === 'human'){
    humanScore++;
  } else if(winner === 'computer'){
    computerScore++;
  } else {
    console.log('incorrect player entered');
  }
}

// increments the current round number by 1 at the end
//  of the round
let advanceRound = () => {
  currentRoundNumber++;
}
