
//GETS COMPUTERS MOVE
function computerMove(){
    let plays = ["rock","paper","scissors"]
    return plays[Math.floor(Math.random()*3)];
}

//GET HUMAN MOVEE

function humanMove(){
    // let pMove = window.prompt("Choose Rock, Paper or Scissors");
    pMove.toLowerCase().trim()
    return pMove;
}



//Play 1 Round Of the Game
function playRound(human , comp){

    if(human == "rock" && comp == "scissors"){
        return `You Win ${human} beats ${comp}`;
    }

    if(human == "paper" && comp == "rock"){
        return `You Win ${human} beats ${comp}`;
    }

    if(human == "scissors" && comp == "rock"){
        return `You Win ${human} beats ${comp}`;
    }

    if(human == comp){
        return `Tie you both chose ${comp} `
    }
    

    return`Computer Wins ${comp} beats ${human}`



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
