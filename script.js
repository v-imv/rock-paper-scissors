// My Rock Paper Scissors Algorithm
let playerScore = 0;
let computerScore = 0;
alert("Welcome To Rock Paper Scissors! Press 'OK' to begin a best of 5 game (first to 3 points).")

// Looping Steps 1 to 5 until there is a winner:
while(playerScore < 3 || computerScore <3) {
    if(playerScore === 3 || computerScore === 3){break;}
    // Prompt the player for their input:
    let askInput = window.prompt("Rock Paper or Scissors?")

// Step 2. Make the player's input case insensitive and store it:
let playerSelection = askInput.toLowerCase();

// Step 3. Run a function to get input from the computer:
// Step 4. Store the computer's input:
function computerPlay(){
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

let computerSelection = computerPlay();

// Step 5. Determine the winner, player or computer and keep track of score:
function winDeterminer(){
    if(playerSelection === 'rock' && computerSelection === 'rock'){
        alert("You both drew rock. It is a tie.");
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        alert("You lose.. Rock loses against Paper.");
        ++computerScore;
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        alert("You win! Rock beats Scissors!");
        ++playerScore;
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        alert("You win! Papers beats Rock!");
        ++playerScore;
    }
    else if(playerSelection === 'paper' && computerSelection === 'paper'){
        alert("You both drew paper. It is a tie.")
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        alert("You lose.. Paper loses against Scissors.");
        ++computerScore;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        alert("You lose. Scissors lose against Rock.");
        ++computerScore;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        alert("You win! Scissors beats Paper!");
        ++playerScore;
    }
    else if(playerScore === 'scissors' && computerSelection === 'scissors'){
        alert("You both drew scissors. It is a tie.");
    }
    else(alert("You shall not pass!! Until you input rock paper or scissors correctly that is..."))
}

// Step 6. Repeat steps 1 to 5 until either party wins 3 times (best of 5):
// This step is a while loop at the top of the code in step 1

// Step 7. Announce a winner:
function winAnnouncer(){
    if(playerScore === 3){
        alert('Congratulations! You won with a score of ' + playerScore + ' to ' + computerScore + '.' + ' Refresh the page if you would like to play again.')
    }
    else if(computerScore === 3){
        alert('Better luck next time.. You lost with a score of ' + playerScore + ' to ' + computerScore + '.' + ' Refresh the page if you would like to play again.')
    }
}

winDeterminer();
winAnnouncer();
}