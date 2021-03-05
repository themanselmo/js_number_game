let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

let compareGuesses = (human, comp, target) => {
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

let updateScore = (winner) => {
  if(winner === 'human'){
    humanScore++;
  } else if(winner === 'computer'){
    computerScore++;
  } else {
    console.log('incorrect player entered');
  }
}

let advanceRound = () => {
  currentRoundNumber++;
}

