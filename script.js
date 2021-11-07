// My Rock Paper Scissors Algorithm

// Step 1. Prompt the player for their input:
let askInput = window.prompt("Rock Paper or Scissors?")

// Step 2. Make the player's input case insensitive and store it:
let playerSelection = askInput.toLowerCase();

// Step 3. Run a function to get input from the computer:
// Step 4. Store the computer's input:
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

// Step 5. Determine the winner, player or computer and keep track of score:
let playerScore = 0; // Potential infinite loop issue
let computerScore = 0; // Potential infinite loop issue

function winDeterminer(){
    if(playerSelection === 'rock' && computerSelection === 'rock'){
        console.log("You both drew rock. It is a tie.");
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        console.log("You lose.. Rock loses against Paper.");
        ++computerScore;
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log("You win! Rock beats Scissors!");
        ++playerScore;
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log("You win! Papers beats Rock!");
        ++playerScore;
    }
    else if(playerSelection === 'paper' && computerSelection === 'paper'){
        console.log("You both drew paper. It is a tie.")
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log("You lose.. Paper loses against Scissors.");
        ++computerScore;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log("You lose. Scissors lose against Rock.");
        ++computerScore;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log("You win! Scissors beats Paper!");
        ++playerScore;
    }
    else if(playerScore === 'scissors' && computerSelection === 'scissors'){
        console.log("You both drew scissors. It is a tie.");
    }
    // else input from the player was incorrect and we must start again from step 1
}

// Step 6. Repeat steps 1 to 5 until either party wins 3 times (best of 5):

// Step 7. Announce a winner:
