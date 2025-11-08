let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('.reset');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
let newBtn=document.querySelector('#new-btn');
let turnO=true;//playerX,playerO
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

] 
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add('hide');
}
    boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
       if(turnO){//o's turn
        box.innerText='O';
        turnO=false;
       }else{//x's turn
        box.innerText='X';
        turnO=true;
       }
       box.disabled=true;
       checkWinner();


    })
})
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
} 
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
} 
const showwinner=(winner)=>{
    msg.innerText=`Congrats ${winner} you won the game!`;
    msgContainer.classList.remove('hide');
    disableBoxes();
    
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText
        let pos2val= boxes[pattern[1]].innerText
        let pos3val= boxes[pattern[2]].innerText

        if(pos1val!="" && pos1val!="" && pos2val!="" ){
            if(pos1val==pos2val && pos2val==pos3val){
                 showwinner(pos1val);
            }
        }
    }
    
}
newBtn.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);
