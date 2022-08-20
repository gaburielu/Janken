const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => location.reload());

const optionBtn = document.querySelectorAll('div.option button');
const roundResults = document.querySelector('#roundResult');
const playerPoints = document.querySelector('#playerScore');
const compPoints = document.querySelector('#computerScore');

let playerFoo = 0;
let compFoo = 0;

function getCompChoice(i) {
    return Math.floor(Math.random() * i);
}

optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });
function getPlayerChoice(e) {
    let playerSelection = (e.target.id);
    playerChoice = e.target.textContent;
    playRound(playerSelection, getCompChoice(3));
}
function playRound(playerC, compC) {

    let round = `${playerC}-${compC}`;
    if (compC == 0) {
        alert("The computer choose Rock!");
    } else if (compC == 1) {
        alert("The computer choose Paper!");
    } else {
        alert("The computer choose Scissor!");
    }

    if (round == "0-2" || round == "1-0" || round == "2-1") {
        alert("You WIN!!");
        playerFoo++;
    } else if (round == "2-0" || round == "0-1" || round == "1-2") {
        alert("You LOSE!");
        compFoo++;
    } else {
        alert("Its a TIE!");
    }

    playerPoints.textContent = `${playerFoo}`;
    compPoints.textContent = `${compFoo}`;
    checkWinner();
}
function checkWinner() {
    if (playerFoo >= 3 || compFoo >= 3) {
        if (playerFoo > compFoo) {
            roundResults.textContent = "HELL YEAH LETS PARTAY! YOU WIN!!";
            alert("GAME ENDED!!");
            optionBtn.forEach(button => {
                button.removeEventListener('click', getPlayerChoice);
            });
        } else if (compFoo > playerFoo) {
            roundResults.textContent = "Aw HELL NO!, YOU LOSE";
            alert("GAME ENDED!!");
            optionBtn.forEach(button => {
                button.removeEventListener('click', getPlayerChoice);
            });
        }
    }
}



