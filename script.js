//Get elements; 

//Scoring Elements
const human_score = document.querySelector('.human-score');
const computer_score = document.querySelector('computer-score');


//Move elements
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

//Text Area
const text_area = document.querySelector('.text-area');

//Score and rounds
let h_score = 0; 
let c_score = 0; 
let round = 1; 




//GETS COMPUTERS MOVE
function computerMove(){
    let plays = ["rock","paper","scissors"]
    return plays[Math.floor(Math.random()*3)];
}

//GET HUMAN MOVEE

rock.addEventListener('click', () =>{
    let result = playRound('rock',computerMove()); 
    result 
    if(result.slice(0,3)=='You'){
        h_score++; 
        round++; 
    }
    if(res){
        
    }


})

//updateItems()
function updateNumber(result){
    let result = result.slice(0,3)
    if(result == 'You'){
        h_score++; 
        round++; 
        human_score.innerHTML = h_score; 
        

        
    }
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
