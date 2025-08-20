console.log("Hello World");
// get the computer's choice randomly
function getComputerChoice(){
    let randomNumber=Math.random().toFixed(2);
    let choice="";
    if (randomNumber>=0 && randomNumber<= 1/3){
        choice="Rock";
    }else if(randomNumber>1/3 && randomNumber<= 2/3){
        choice="Paper";
    }else if(randomNumber>2/3 && randomNumber <=1){
        choice="Scissors";
    }
    return choice;
}

//get the playe's choice and save it

function playerChoice(){
    let playerChoice=prompt(`Press    R for Rock 
            P for Paper         
            S for Scissors
        `).toUpperCase();
        let choice="";
    if (playerChoice==="R"){
        choice="Rock";
        console.log(choice);
    }else if(playerChoice==="P"){
        choice="Paper";
        console.log(choice);
    }else if(playerChoice==="S"){
        choice="Scissors";
        console.log(choice);
    }
    return choice
}
//initialize score variables
let humanScore=0;
let computerScore=0;
let ties=0;


//play a round of game
function playRound(player,computer){
//if player pick rock
    if (player==="Rock" && computer==="Paper"){
        console.log("Paper beats Rock. You lose!");
        computerScore+=1;
    
    }else if (player==="Rock" && computer==="Scissors"){
        console.log("Rock beats Scissors. You win!");
        humanScore+=1;

    } else if (player==="Rock" && computer==="Rock"){
        console.log("Rock and Rock match. It was a tie.");
        ties+=1;
//if player picks paper
    }else if (player==="Paper" && computer==="Rock"){
        console.log("Paper beats Rock. You win!");
        humanScore+=1;
    
    }else if (player==="Paper" && computer==="Paper"){
        console.log("Paper and paper match. It was a tie.");
        ties+=1;

    } else if (player==="Paper" && computer==="Scissors"){
        console.log("Scissors beats Paper. You lose!");
        computerScore+=1;
// if player picks Scissors
    }else if (player==="Scissors" && computer==="Rock"){
        console.log("Rock beats Scissors. You lose!");
        computerScore+=1;
    }else if (player==="Scissors" && computer==="Paper"){
        console.log("Scissors beats Paperr. You win");
        humanScore+=1;
    }else if(player==="Scissors" && computer==="Scissors"){
        console.log("Scissors and Scissors match. It was a tie.");
        ties+=1;

    }
    console.log(`Computer's Score ${computerScore}, Player's Score ${humanScore}, Ties ${ties}`);

}
//ask how many rounds should be played
let rounds=parseInt(prompt("How many rounds do you want to play?"))
function playGame(rounds){
    for (let i =0; i<=rounds;i++){
        //store player and computer choice
        let player=playerChoice();
        let computer=getComputerChoice();
        playRound(player,computer);
    }
}

playGame(rounds);

