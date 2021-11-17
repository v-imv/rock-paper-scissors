let playerScore = 0;
let computerScore = 0;
//alert("Welcome To Rock Paper Scissors! First to 5 points wins. \nPress 'OK' to begin a game.")

const body = document.body;

const rockButton = document.createElement('button');
body.appendChild(rockButton);
rockButton.setAttribute('id', 'rock-button');
rockButton.setAttribute('class', 'buttons');
rockButton.textContent = 'Rock';
rockButton.addEventListener('click', playerSelectionRockRound);

const paperButton = document.createElement('button');
body.appendChild(paperButton);
paperButton.setAttribute('id', 'paper-button');
paperButton.setAttribute('class', 'buttons');
paperButton.textContent = 'Paper';
paperButton.addEventListener('click', playerSelectionPaperRound);

const scissorsButton = document.createElement('button');
body.appendChild(scissorsButton);
scissorsButton.setAttribute('id', 'scissors-button');
scissorsButton.setAttribute('class', 'buttons');
scissorsButton.textContent = 'Scissors'
scissorsButton.addEventListener('click', playerSelectionScissorsRound);

let playerSelectRock = 'rock';
function playerSelectionRockRound(){
    playerSelectRock;
    computerPlay();
    winDeterminer();
    winAnnouncer();
}

let playerSelectPaper = 'paper';
function playerSelectionPaperRound(){
    playerSelectPaper;
    computerPlay();
    winDeterminer();
    winAnnouncer();
}

let playerSelectScissors = 'scissors';
function playerSelectionScissorsRound(){
    playerSelectScissors;
    computerPlay();
    winDeterminer();
    winAnnouncer();
}


function computerPlay(){
    let x = Math.floor(Math.random() *101 )

    if(x <= 33.32){
        return('rock')
    }
    else if(x >= 33.33 && x <= 66.66){
        return('paper')
    }
    else {return('scissors')}
}

function winDeterminer(){
    if(playerSelectRock === 'rock' && computerPlay() === 'rock'){
        alert("You both drew rock. It is a tie.");
    }
    else if(playerSelectRock === 'rock' && computerPlay() === 'paper'){
        alert("You lose.. Rock loses against Paper.");
        ++computerScore;
    }
    else if(playerSelectRock === 'rock' && computerPlay() === 'scissors'){
        alert("You win! Rock beats Scissors!");
        ++playerScore;
    }
    else if(playerSelectPaper === 'paper' && computerPlay() === 'rock'){
        alert("You win! Paper beats Rock!");
        ++playerScore;
    }
    else if(playerSelectPaper === 'paper' && computerPlay() === 'paper'){
        alert("You both drew paper. It is a tie.")
    }
    else if(playerSelectPaper === 'paper' && computerPlay() === 'scissors'){
        alert("You lose.. Paper loses against Scissors.");
        ++computerScore;
    }
    else if(playerSelectScissors === 'scissors' && computerPlay() === 'rock'){
        alert("You lose. Scissors lose against Rock.");
        ++computerScore;
    }
    else if(playerSelectScissors === 'scissors' && computerPlay() === 'paper'){
        alert("You win! Scissors beats Paper!");
        ++playerScore;
    }
    else if(playerSelectScissors === 'scissors' && computerPlay() === 'scissors'){
        alert("You both drew scissors. It is a tie.");
    }
}

function winAnnouncer(){
    if(playerScore === 5){
        alert('Congratulations! You won with a score of ' + playerScore + ' to ' + computerScore + '.' + ' Refresh the page if you would like to play again.')
    }
    else if(computerScore === 5){
        alert('Better luck next time.. You lost with a score of ' + playerScore + ' to ' + computerScore + '.' + ' Refresh the page if you would like to play again.')
    }
}

