
let Score = JSON.parse(localStorage.getItem('Score'));

if(!Score){
   Score = {
    wins : 0,
    Lose : 0,
    Tie : 0
   }
}

function updateScore(){
    document.querySelector(".js-Score").innerHTML = `Wins : ${Score.wins} , Lose : ${Score.Lose} , Tie : ${Score.Tie}`
}



updateScore()


    
function PlayGame(PlayerMove){




const randomMove = compMove();
   let result = '';

if( PlayerMove === 'rock'){
    if( randomMove === 'rock'){
        result = 'Tie.'
    } else if( randomMove === 'Paper'){
        result = 'You Lose.'
    } else if( randomMove === 'Scissors' ){
        result = 'You Win.'
    }
} 



else if( PlayerMove === 'Paper'){
    if( randomMove === 'rock'){
        result = 'You Win.'
    } else if( randomMove === 'Paper'){
        result ='Tie.'
    } else if( randomMove === 'Scissors' ){
        result = 'You Lose.'
    }
} 



else if( PlayerMove === 'Scissors' ){
    if( randomMove === 'rock'){
        result = 'You Lose.'
    } else if( randomMove === 'Paper'){
        result = 'You Win.'
    } else if( randomMove === 'Scissors' ){
        result = 'Tie.'
    }
}


if( result === 'You Win.'){
    Score.wins+= 1;
} 

else if( result === 'You Lose.' ){
    Score.Lose +=1;
} 

else if(result === 'Tie.'){
    Score.Tie += 1;
}

localStorage.setItem('Score' , JSON.stringify(Score));

updateScore();

PlayerMove = PlayerMove.toLowerCase();

document.querySelector(".js-moves").innerHTML = `You - <img class="result" src="${PlayerMove}-img-removebg-preview.png" alt="playermove"> || Computer - <img class="result" src="${randomMove}-img-removebg-preview.png" alt="comp move">` 

document.querySelector(".js-result").innerHTML = `Result - ${result}`


}

function backgroundColor(){
document.querySelector('btn-reset').backgroundColor = 'rgba(255, 0, 0, 0.918)';
}



function compMove(){

let num = Math.random();
let computerMove = ''; 

if( num >= 0 && num < 1 / 2){
    computerMove = 'rock';
} else if( num >= 1 / 2 && num < 2 / 3 ){
    computerMove = 'Paper';
} else if( num >= 2 / 3 && num < 1 ){
    computerMove = 'Scissors'
}

return computerMove
}



function resetScore(){


Score.wins = 0;
Score.Lose = 0;
Score.Tie = 0;

localStorage.removeItem('Score');

updateScore();
}

