//Here we write our logic

const youOptions=document.querySelectorAll('.option');
const computerOptions=document.querySelectorAll('.computer-option');
const messContainer=document.querySelector('.message-container');
const message=document.querySelector('#message');
const userScore=document.querySelector('#your-score');
const compScore=document.querySelector('#computer-score');
let yourScore=0;
let computerScore=0;

const removeHoverclass=(container)=>{
    setTimeout(()=>{
        container.classList.remove('computer-option-hover');
   },2000);
}
const computerImageHover=(computerOptions,computergenerated)=>{
        computerOptions.forEach((div)=>{
              if(div.id===computergenerated){
                div.classList.add('computer-option-hover');
                removeHoverclass(div);
            }
        });
};




const displayMessage=(result)=>{
   // console.log(`${result} won the Game`);
   if(result==='user'){
        message.setAttribute( "style", "background-color: green;" );
        message.innerText='Congts! You Won Game';
        userScore.innerHTML=`${yourScore}`;
        compScore.innerHTML=`${computerScore}`;
   }else if(result=='computer'){
        message.setAttribute( "style", "background-color: red;" );
        message.innerText='Computer Won Game';
        userScore.innerHTML=`${yourScore}`;
        compScore.innerHTML=`${computerScore}`;
   }else{
        message.setAttribute( "style", "background-color: red;" );
        message.innerText='Game Draw';
        userScore.innerText=`${yourScore}`;
        compScore.innerText=`${computerScore}`;
   }
   setTimeout(()=>{
       message.setAttribute( "style", "background-color: #081b31;" );
       message.innerText='Play Your Move';
   },2000);
};

const computerChoise=()=>{
    const name=['rock','paper','Scissors'];
    let random=Math.floor(Math.random()*(name.length - 0) + 0);
    const computerCho=name[random];
    computerImageHover(computerOptions,computerCho);
    return computerCho;
}

const playGame=(userChoise)=>{
     const compChoise=computerChoise();
     if(userChoise==='rock'){
        if(compChoise==='rock'){
              //  console.log('Match draw',userChoise,compChoise);
                displayMessage('draw');
        }else if(compChoise==='paper'){
            //  console.log('computer won ',userChoise,compChoise);
            computerScore++;
            displayMessage('computer');
        }else{
           // console.log('User won ',userChoise,compChoise);
            yourScore++;
            displayMessage('user');
        }

     }else if(userChoise==='paper'){
        if(compChoise==='rock'){
             //console.log('user won',userChoise,compChoise);
             yourScore++;
             displayMessage('user');
            }else if(compChoise==='paper'){
              //  console.log('Game Draw ',userChoise,compChoise);
              displayMessage('draw');
            }else{
              //  console.log('Computer won ',userChoise,compChoise);
                computerScore++;
                displayMessage('computer');
            }

     }else{
        if(compChoise==='rock'){
                computerScore++;
                displayMessage('computer');
            //console.log('Computer won',userChoise,compChoise);
         }else if(compChoise==='paper'){
                yourScore++;
                displayMessage('user');
          // console.log('User won ',userChoise,compChoise);
         }else{
            displayMessage('Draw');
           //console.log('Game draw ',userChoise,compChoise);
    }
   }
};

 youOptions.forEach((images)=>{
    images.addEventListener('click',(event)=>{
        //console.log(images.id);
        playGame(images.id);
    });
});




