// My Rock Paper Scissors Algorithm

// Step 1. Prompt the player for their input:
let askInput = window.prompt("Rock Paper or Scissors?")

// Step 2. Make the player's input case insensitive and store it:
let playerSelection = askInput.toLowerCase();

// Step 3. Run a function to get input from the computer:
let computerSelection = function computerPlay(){
    let rock = 'rock'
    let paper = 'paper'
    let scissors = 'scissors'
    let x = Math.floor(Math.random() *101 )

    if(x <= 33.32){
        return(rock)
    }
    else if(x >= 33.33 && x <= 66.66){
        return(paper)
    }
    else {return(scissors)}
}

console.log(playerSelection);
console.log(computerSelection());

// Step 4. Store the computer's input:

// Step 5. Determine the winner, player or computer?:

// Step 6. Repeat steps 1 to 5 until either party wins 3 times (best of 5):

// Step 7. Announce a winner:
