
//GETS COMPUTERS MOVE
function computerMove(){
    let plays = ["Rock","Paper","Scissors"]
    return plays[Math.floor(Math.random()*3)];
}

//GET HUMAN MOVEE

function humanMove(){
    let pMove = window.prompt("Choose Rock, Paper or Scissors");
    pMove.toLowerCase()
    pMove = pMove.slice(0,0)
    return pMove;
}


//Play 1 Round Of the Game
function playRound(human , comp){
    
    if (human != "r" || human != "p" || human != "s"){
        return("Invalid Move!!!")
    }
    if(human == "r" &&comp == "Scissors"){
        return("You Win Rock Beats Scissors")
    }
    if(human == "p" && comp == "Rock"){
        return("You Win Paper Beats Rock")

    }
    if(human == "s" && comp == "Paper"){
        return("You Win Scissors Beats Paper")

    }else {
        let c;
        if(human === "r"){
            let c = "Rock"
        }
        if(human === "p"){
            let c = "Paper"
        }
        if(human === "s"){
            let c = "Scissors"
        }
        return(`Computer Wins ${comp} beats ${c}`)

    }

}


function game(){
    let round = 0; 
    let humanScore = 0; 
    let compScore = 0; 
    while (round<5) {
        let human = humanMove(); 
        console.log(`human ${human}`)


        let comp = computerMove(); 
        console.log(`computer ${comp}`)


        let result = playRound(human,comp);
        let win = result; 
        result = result.slice(0,3); 

        if(result == "You"){
            humanScore++; 
        }else{
            compScore++; 
        }

        console.log(win);
        round++; 
        
    }
console.log(`Final Score \n You: ${humanScore}\n Computer: ${compScore}`)

}
game()
