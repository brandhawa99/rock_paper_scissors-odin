
//GETS COMPUTERS MOVE
function computerPlay(){
    let plays = ["Rock","Paper","Scissors"]
    return plays[Math.floor(Math.random()*3)];
}

//GET HUMAN MOVEE

function playerSelection(){
    let pMove = window.prompt("Choose Rock, Paper or Scissors");
    pMove.toLowerCase()
    pMove = pMove.slice(0,1)
    return pMove;
}


//Play 1 Round Of the Game
function playRound(human , comp){

    if(human == r &&comp == Scissors){
        return("You Win Rock Beats Scissors ")
    }
    else if(human == p && comp == Rock){
        return("You Win Paper Beats Rock")

    }
    else if(human == s && comp == Paper){
        return("You Win Scissors Beats Paper")

    }
    else if (human != r || human != p || human != s){
        return("Invalid Move!!!")
    }

    else {
        let c;
        if(human == r){
            let c = "Rock"
        }
        if(human == p){
            let c = "Paper"
        }
        if(human == S){
            let c = "Scissors"
        }
        return(`You Lose ${comp} beats ${c}`)

    }

}
