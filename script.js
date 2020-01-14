function oneToTen() {
    let randomNumber = Math.floor(Math.random() * 11)
    return randomNumber;
}

function computerPlay() {
    let randomNumber = oneToTen();

    if (randomNumber >= 0 && randomNumber < 3) {
        return 'rock'
    } else if (randomNumber >= 3 && randomNumber < 6) {
        return 'paper'
    } else {
        return 'scissors'
    }
}


function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection().toLowerCase();

    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        if (playerChoice === 'rock' && computerChoice === 'scissors') {
            return 1
        } else if (playerChoice === 'rock' && computerChoice === 'paper') {
            return -1
        } else if (playerChoice === 'rock' && computerChoice === 'rock') {
            return 0
        } else if (playerChoice === 'paper' && computerChoice === 'rock') {
            return 1
        } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
            return -1
        } else if (playerChoice === 'paper' && computerChoice === 'paper') {
            return 0
        } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
            return 1
        } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
            return -1
        } else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
            return 0
        }
    } else if (playerChoice === ''){
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

        
        if (result === 1){
            console.log('You won')
            playerScore++
        } else if (result === -1){
            console.log('You lost!')
            computerScore++
        } else if (result === 0){
            console.log('Tie! Play again.')
            i--
        } else if (result === 'cancelled'){
            alert("You didn't type an option");
            break;
        } else if (result === 'invalid'){
            alert("You can only choose between rock, paper or scissors!")
            break;
        }

    }

}

let playerGlobalScore = 0;
let computerGlobalScore = 0;