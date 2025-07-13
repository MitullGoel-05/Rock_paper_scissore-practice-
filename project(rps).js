const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
let userSc = 0;
let compSc = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#mssg");
const replay_btn = document.querySelector("#replay");

const gameStart = () => {
    replay_btn.addEventListener("click", () => {
        userSc = 0;
        compSc = 0;
        userScore.innerText = userSc;
        compScore.innerText = compSc;
        msg.innerText = "Play your move";
        msg.style.backgroundColor = "#081b31";
        replay_btn.style.visibility = "hidden";
    });
};

// Call it once to attach the event listener
gameStart();

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    // rock, paper, scissors
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText= "Game was Draw. Play again ";
        msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice, compChoice) => {
    
    if(userWin) {
        console.log("you win!");
        msg.innerText= `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userSc = userSc+ 1;
        userScore.innerText = userSc; 
    }else {
        console.log("you lose!");
        msg.innerText= `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compSc = compSc + 1;
        compScore.innerText = compSc; 
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    replay_btn.style.visibility = "visible";
};


choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const choiceId = choice.getAttribute("id");
        // console.log("choice was clicked", choiceId);
        playGame(choiceId);
    });
});