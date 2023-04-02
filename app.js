/*************State***************/
const state = {};

const resetState = () => {
   state.players = ['', ''];
state.board = [
       
          {char: '', clicked: false },
          {char: '', clicked: false },
          {char: '', clicked: false },
          {char: '', clicked: false },
          {char: '', clicked: false },
          {char: '', clicked: false },
          {char: '', clicked: false },
          {char: '', clicked: false },
          {char: '', clicked: false }
                
  ];
  state.playerIdx =0;
  state.playerOneInd =0;
  state.getCurrentPlayer = () => state.players[state.playerIdx];
  state.changePlayer = () => state.playerIdx = Math.abs(state.playerIdx - 1);
};


const body = document.querySelector('body');
const main = document.createElement('main');


const titleH1 = document.createElement('h1');
titleH1.innerText ='Tic-Tac-Toe! Can you outsmart your foe?';
body.appendChild(titleH1);      

function removeChildNodes(parent){
   while(parent.firstChild){
      parent.removeChild(parent.firstChild);
   }
}


const playName = document.createElement('div');
playName.id = 'playerNames';

let playNameHTML = '<input name="player1" placeholder = "Enter Player 1 Name" /> <input name="player2" placeholder = "Enter Player 2 Name" /> <button id="start">Start Game</button>';
playName.innerHTML = playNameHTML;

body.appendChild(playName);


/*************MAIN***************/

const renderBoard = () => {
main.className = 'tac-grid';
   for (let i = 0; i < state.board.length; i++){
        const div = document.createElement('div');
       div.className = 'cell';
       div.innerText = state.board[i].char;
       div.id = i;
       main.appendChild(div);
    }
    
body.appendChild(main); 
};
        

/***********Event Listeners***********/

 main.addEventListener('click',function(event){ 
  
   if(state.board[event.target.id].char) return;
if(state.playerOneInd === state.playerIdx){//this is that variable assignments for player one that we made earlier this having to be strictly equal forces the else to take place and changing turns occurs at the function below
  state.board[event.target.id].char = 'X';
   event.target.innerText = 'X';
   state.board[event.target.id].clicked = true;
    console.dir(event.target);
   } else {state.board[event.target.id].char = 'O';
   event.target.innerText = 'O';
   state.board[event.target.id].clicked = true;
    console.dir(event.target);
   }
  state.changePlayer() //this one!
})

playName.addEventListener('click', function(event){
 
   if(event.target.id === 'start'){  
      const playerOne = document.querySelector('input[name=player1]');
      const playerTwo = document.querySelector('input[name=player2]');
      state.players[0]=playerOne.value
      state.players[1]=playerTwo.value
      console.dir(playerOne)
         const randNum = Math.floor(Math.random() * (1- 0 + 1) + 0);//this is setting it to assign an index to this variable
         state.playerOneInd = randNum; //we used this variable to assign player one wich by default assigns player2 to what is left over
         state.playerIdx = randNum;
       }
   

});

  let winCond = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
           ];
   function checkWin(winCond){
      return boardIdx.every(function(index) {
           if (winCond.some(checkWin)) {
            alert("Win") 
           state.board[index].char;
          }
         })
         
       };
     
resetState();
console.log(state)
renderBoard();



function newFunction() {
   state.checkWin();
}
