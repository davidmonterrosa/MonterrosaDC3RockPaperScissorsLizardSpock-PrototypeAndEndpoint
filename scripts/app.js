// ID Section
let playerVsPlayerBtn = document.getElementById("playerVsPlayerBtn");
let playerVsComputerBtn = document.getElementById("playerVsComputerBtn");

let computerBestOf1Btn = document.getElementById("computerBestOf1Btn");
let computerBestOf5Btn = document.getElementById("computerBestOf5Btn");
let computerBestOf7Btn = document.getElementById("computerBestOf7Btn");
let playerBestOf1Btn = document.getElementById("playerBestOf1Btn");
let playerBestOf5Btn = document.getElementById("playerBestOf5Btn");
let playerBestOf7Btn = document.getElementById("playerBestOf7Btn");

let instructions = document.getElementById("instructions");
let mainResult = document.getElementById("mainResult");

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let lizardBtn = document.getElementById("lizardBtn");
let spockBtn = document.getElementById("spockBtn");

// let pvpRockBtn = document.getElementById("rockBtn");
// let pvpPaperBtn = document.getElementById("paperBtn");
// let pvpScissorsBtn = document.getElementById("scissorsBtn");
// let pvpLizardBtn = document.getElementById("lizardBtn");
// let pvpSpockBtn = document.getElementById("spockBtn");


// need a variable to track the move
let player1Move = "";
let player2Move = "";

let player1Score = 0;
let player2Score = 0;
let computerScore = 0;

let opponent = "";
let matchLength = 0;

let player2Turn = false;

const roundWinConditions = {

}


const getComputerMove = async () => {
    const response = await fetch("https://monterrosarpslsv1-aaapdudtatbdgtc0.westus-01.azurewebsites.net/RPSLSGame/Play");
    const data = await response.text();
    console.log(data);
}


rockBtn.addEventListener("click", () => {
    if(opponent === "computer"){
        let computerMove = getComputerMove();
        switch(computerMove) {
            case "Rock":
                mainResult.innerText = "It's a tie!";
                break;
            case "Paper":
                mainResult.innerText = "Computer wins! Paper covers Rock.";
                computerScore++;
                isGameOver();
                break;
            case "Scissors":
                mainResult.innerText = "You win! Rock crushes scissors.";
                player1Score++;
                break;
            case "Lizard":
                mainResult.innerText = "You win! Rock crushes lizard.";
                player1Score++;
                break;
            case "Spock":
                mainResult.innerText = "Computer wins! Spock vaporizes rock.";
                computerScore++;
                break;
            default:
                console.log("Error: Invalid computerMove comparison, switch case defaulted.")
        } 
    } else {
        if(player2Turn == false) {
            instructions.innerText = "Player 2's turn:"
            player2Turn = true;
        } else {
            instructions.innerText = "Player 1's turn:"
            player2Turn = false;

        }
    }
});

paperBtn.addEventListener("click", () => {
    if(opponent === "computer"){
        let computerMove = getComputerMove();
        switch(computerMove) {
            case "Rock":
                mainResult.innerText = "You win! Paper covers rock";
                player1Score++;
                break;
            case "Paper":
                mainResult.innerText = "It's a tie!";
                break;
            case "Scissors":
                mainResult.innerText = "Computer wins! Scissors cuts paper.";
                computerScore++;
                break;
            case "Lizard":
                mainResult.innerText = "Computer wins! Lizard eats paper.";
                computerScore++;
                break;
            case "Spock":
                mainResult.innerText = "You win! Paper disproves Spock.";
                player1Score++;
                break;
            default:
                console.log("Error: Invalid computerMove comparison, switch case defaulted.")
        } 
    } else {

    }
});

scissorsBtn.addEventListener("click", () => {
    if(opponent === "computer") {
        let computerMove = getComputerMove();
        switch(computerMove) {
            case "Rock":
                mainResult.innerText = "Computer wins! Rock crushes scissors";
                computerScore++;
                break;
            case "Paper":
                mainResult.innerText = "You win! Scissors cuts paper.";
                player1Score++;
                break;
            case "Scissors":
                mainResult.innerText = "It's a tie!";
                break;
            case "Lizard":
                mainResult.innerText = "You win! Scissors decapitates lizard.";
                player1Score++;
                break;
            case "Spock":
                mainResult.innerText = "Computer wins! Spock smashes scissors.";
                computerScore++;
                break;
            default:
                console.log("Error: Invalid computerMove comparison, switch case defaulted.")
        } 
    } else {

    }
});

lizardBtn.addEventListener("click", () => {
    if(opponent === "computer") {
        let computerMove = getComputerMove();
        switch(computerMove) {
            case "Rock":
                mainResult.innerText = "Computer wins! Rock crushes lizard";
                break;
            case "Paper":
                mainResult.innerText = "You win! Lizard eats paper.";
                player1Score++;
                break;
            case "Scissors":
                mainResult.innerText = "Computer wins! Scissors decapitates lizard.";
                break;
            case "Lizard":
                mainResult.innerText = "It's a tie!";
                break;
            case "Spock":
                mainResult.innerText = "You win! Lizard poisons Spock.";
                player1Score++;
                break;
            default:
                console.log("Error: Invalid computerMove comparison, switch case defaulted.")
        } 
    } else {

    }
});

spockBtn.addEventListener("click", () => {
    if(opponent === "computer") {
        let computerMove = getComputerMove();
        switch(computerMove) {
            case "Rock":
                mainResult.innerText = "You win! Spock vaporizes rock";
                player1Score++;
                break;
            case "Paper":
                mainResult.innerText = "Computer wins! Paper disproves Spock.";
                break;
            case "Scissors":
                mainResult.innerText = "You win! Spock smashes scissors.";
                player1Score++;
                break;
            case "Lizard":
                mainResult.innerText = "Computer wins! Lizard poisons Spock.";
                break;
            case "Spock":
                mainResult.innerText = "It's a tie!";
                break;
            default:
                console.log("Error: Invalid computerMove comparison, switch case defaulted.")
        } 
    } else {

    }
});

