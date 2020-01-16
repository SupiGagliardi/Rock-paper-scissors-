function cpuMove() {
    let randomNumber = Math.floor(Math.random() * 3)
    return randomNumber;
}

function computerPlay() {
    let randomNumber = cpuMove();

    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}


function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection().toLowerCase();

    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        if (playerChoice === computerChoice) {
            return 0;
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')) {
                return 1;
        } else {
            return -1;
        }
    }
    if (playerChoice === '') {
        return 'cancelled'
    } else {
        return 'invalid'
    }
}
    function game() {

        let playerScore = 0;
        let computerScore = 0;

        for (let i = 0; i < 10; i++) {
            if (playerScore === 3) {
                playerGlobalScore++;
                alert(`You won this best of five, congrats! Global score: you(${playerGlobalScore}) computer(${computerGlobalScore})`)
                break;
            } else if (computerScore === 3) {
                computerGlobalScore++;
                alert(`You lost this best of five, better luck next time!  Global score: you(${playerGlobalScore}) computer(${computerGlobalScore})`)
                console.log();
                break;
            }

            let result = playRound(prompt('Choose rock, paper or scissors!'), computerPlay);


            if (result === 1) {
                console.log('You won')
                playerScore++
            } else if (result === -1) {
                console.log('You lost!')
                computerScore++
            } else if (result === 0) {
                console.log('Tie! Play again.')
                i--
            } else if (result === 'cancelled') {
                alert("You didn't type an option");
                break;
            } else if (result === 'invalid') {
                alert("You can only choose between rock, paper or scissors!")
                break;
            }

        }

    }

    let playerGlobalScore = 0;
    let computerGlobalScore = 0;



    let stringOne = 'hello';
    let stringTwo = 'bye';
    let stringThree = 'friend...';
    stringOne += stringTwo;