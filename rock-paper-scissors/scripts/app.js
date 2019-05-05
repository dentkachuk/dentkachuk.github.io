let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector(".user-score");
const computerScore_span = document.querySelector(".comp-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.querySelector(".choises__item_rock");
const paper = document.querySelector(".choises__item_paper");
const scissors = document.querySelector(".choises__item_scissors");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoise, computerChoise) {
    const userChoise_li = document.getElementById(userChoise);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${userChoise}<sub>user</sub> beats ${computerChoise}<sub>comp</sub>. You WIN!`;
    userChoise_li.classList.add('win');
    setTimeout(() => { userChoise_li.classList.remove('win')}, 350);
}

function lose(userChoise, computerChoise) {
    const userChoise_li = document.getElementById(userChoise);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${userChoise}<sub>user</sub> loses ${computerChoise}<sub>comp</sub>. You LOSE!`;
    userChoise_li.classList.add('lose');
    setTimeout(() => { userChoise_li.classList.remove('lose') }, 350);
}

function draw(userChoise, computerChoise) {
    const userChoise_li = document.getElementById(userChoise);
    result.innerHTML = `${userChoise}<sub>user</sub> equals ${computerChoise}<sub>comp</sub>. Its a DRAW!`;
    userChoise_li.classList.add('draw');
    setTimeout(() => { userChoise_li.classList.remove('draw') }, 350);
}

function game(userChoise) {
    const computerchoise = getComputerChoice();
    switch (userChoise + computerchoise) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoise, computerchoise);
            break;

        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            lose(userChoise, computerchoise);
            break;

        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoise, computerchoise);
            break;
    }
}

function main() {
    rock.addEventListener("click", function () {
        game("Rock");
    })

    paper.addEventListener("click", function () {
        game("Paper");
    })

    scissors.addEventListener("click", function () {
        game("Scissors");
    })
}

main();
