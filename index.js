let userScr = 0;
let compScr = 0;
let userprint = document.querySelector('#userscore');
let compprint = document.querySelector('#compscore');
let resetbtn = document.querySelector('.btn');

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector('#msg');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    let randInd = Math.floor(Math.random() * 3);
    return options[randInd];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScr++;
        userprint.innerText = `${userScr}`;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
        msg.style.color = 'white';
    } else {
        compScr++;
        compprint.innerText = `${compScr}`;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        msg.innerText = 'It\'s a draw!';
        msg.style.backgroundColor = 'yellow';
        msg.style.color = 'black';
    } else {
        let userWin = false;
        if (
            (userChoice === 'rock' && compChoice === 'scissors') ||
            (userChoice === 'paper' && compChoice === 'rock') ||
            (userChoice === 'scissors' && compChoice === 'paper')
        ) {
            userWin = true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetbtn.addEventListener('click', () => {
    userScr = 0;
    compScr = 0;
    userprint.innerText = `${userScr}`;
    compprint.innerText = `${compScr}`;
    msg.innerText = 'Play your next move';
    msg.style.backgroundColor = '';
    msg.style.color = '';
});
