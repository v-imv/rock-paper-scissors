let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
alert("Welcome To Rock Paper Scissors! First to 5 points wins. \nPress 'OK' to begin a game.")

const body = document.body;

const buttonsDiv = document.createElement('div');
body.appendChild(buttonsDiv);
buttonsDiv.setAttribute('class', 'buttonContainer');

const rockButton = document.createElement('button');
buttonsDiv.appendChild(rockButton);
rockButton.setAttribute('id', 'rock-button');
rockButton.setAttribute('class', 'buttons');
rockButton.textContent = 'Rock';
rockButton.addEventListener('click', playerSelectionRockRound);

const paperButton = document.createElement('button');
buttonsDiv.appendChild(paperButton);
paperButton.setAttribute('id', 'paper-button');
paperButton.setAttribute('class', 'buttons');
paperButton.textContent = 'Paper';
paperButton.addEventListener('click', playerSelectionPaperRound);

const scissorsButton = document.createElement('button');
buttonsDiv.appendChild(scissorsButton);
scissorsButton.setAttribute('id', 'scissors-button');
scissorsButton.setAttribute('class', 'buttons');
scissorsButton.textContent = 'Scissors'
scissorsButton.addEventListener('click', playerSelectionScissorsRound);

const scoreboardDiv = document.createElement('div');
body.appendChild(scoreboardDiv);
scoreboardDiv.setAttribute('class', 'scoreContainer');

const playerScoreTracker = document.createElement('div');
scoreboardDiv.appendChild(playerScoreTracker);
playerScoreTracker.textContent = ('Player Score: ' + playerScore);

const computerScoreTracker = document.createElement('div');
scoreboardDiv.appendChild(computerScoreTracker);
computerScoreTracker.textContent = ('Computer Score: ' + computerScore);

const tieScoreTracker = document.createElement('div');
scoreboardDiv.appendChild(tieScoreTracker);
tieScoreTracker.textContent = ('Ties: ' + tieScore);

const playerSelectRock = 'rock'
function playerSelectionRockRound(){
    winDeterminer(playerSelectRock, computerPlay());
    winAnnouncer();
    scoreTracker();
}

const playerSelectPaper = 'paper';
function playerSelectionPaperRound(){
    playerSelectPaper;
    winDeterminer(playerSelectPaper, computerPlay());
    winAnnouncer();
    scoreTracker();
}

const playerSelectScissors = 'scissors';
function playerSelectionScissorsRound(){
    playerSelectScissors;
    winDeterminer(playerSelectScissors, computerPlay());
    winAnnouncer();
    scoreTracker();
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

function scoreTracker(){
    playerScoreTracker.textContent = ('Player Score: ' + playerScore);
    computerScoreTracker.textContent = ('Computer Score: ' + computerScore);
    tieScoreTracker.textContent = ('Ties: ' + tieScore);
}

function winDeterminer(playerSelection, computerSelection){
    if(playerSelection === 'rock' && computerSelection === 'rock'){
        alert("You both drew rock. It is a tie.");
        ++tieScore;
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
        alert("You win! Paper beats Rock!");
        ++playerScore;
    }
    else if(playerSelection === 'paper' && computerSelection === 'paper'){
        alert("You both drew paper. It is a tie.")
        ++tieScore;
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
    else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        alert("You both drew scissors. It is a tie.");
        ++tieScore;
    }
}

function winAnnouncer(){
    if(playerScore === 5){
        alert('Congratulations! You won with a score of ' + playerScore + ' to ' + computerScore + '.')
        location.reload();
    }
    else if(computerScore === 5){
        alert('Better luck next time.. You lost with a score of ' + playerScore + ' to ' + computerScore + '.')
        location.reload();
    }
}

