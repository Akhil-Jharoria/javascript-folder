//here we write a code for the game

const playArea=document.querySelectorAll('.play-area');
const winnerspan=document.querySelector('#winner');
const restart=document.querySelector('#restart');
const newgame=document.querySelector('#newgame');
const messcontainer=document.querySelector('.mesg')
let turnofO=false;
const winPattern=[[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let countClick=0;


playArea.forEach((button)=>{
      button.addEventListener('click',(event)=>{
           //console.log(event.target.id);

           if(turnofO){
               button.innerHTML="O";
               turnofO=false;
               countClick++;
            }else{
                button.innerHTML="X";
                turnofO=true;
                countClick++;
            }
            button.disabled = true;
            checkwinner();
           
      });
});

const checkwinner=()=>{
     for (let pattern of winPattern) {
        let posValue1=playArea[pattern[0]].innerText;
        let posValue2=playArea[pattern[1]].innerText;
        let posValue3=playArea[pattern[2]].innerText;

         if(posValue1!='' && posValue2!="" && posValue3!=""){
             if(posValue1===posValue2 && posValue2===posValue3){
                displaymesg(posValue1);
                disablebuttons();
             }else if(countClick===9){
                messcontainer.classList.remove("hide")
                winnerspan.innerHTML=`<b>Match is Draw</b>`;
             }
         }
     }
};

const displaymesg=(value)=>{

     if(value==='O'){
        messcontainer.classList.remove("hide")
        winnerspan.innerHTML=`<b>Congrats ! Player 2(${value}) is won!</b>`;
     }else if(value==='X'){
        messcontainer.classList.remove("hide")
        winnerspan.innerHTML=`<b>Congrats ! Player 1(${value}) is won!</b>`;
     }
    //  else{
    //     if(countClick===9){
    //         messcontainer.classList.remove("hide")
    //         winnerspan.innerHTML=`<b>No One Won the match</b>`;
    //     }
    //  }
};


const disablebuttons=()=>{
    playArea.forEach((button)=>{
        button.disabled=true;
    })
};

const enablebuttons=()=>{
    playArea.forEach((button)=>{
        button.disabled=false;
    })
}


restart.addEventListener('click',()=>{
    turnofO=false;
    messcontainer.classList.add("hide");
    enablebuttons();
    playArea.forEach((button)=>{
            button.innerHTML="";
    });
});





// if(countClick===9){
//     displaymesg("");
//   }