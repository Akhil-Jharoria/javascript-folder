//here we are writting the code for actual logic

const form=document.querySelector('form');
const err=document.querySelector('.lowOrHi');
const guesses=document.querySelector('.guesses');
const lastresult=document.querySelector('.lastResult');
const previous=[];
let noofchances=10;
const randnumber=Math.floor(Math.random()*100)+1;
console.log(randnumber);

form.addEventListener('submit',function(fom){
  fom.preventDefault();
  let guessnum=parseInt(document.querySelector('#guessField').value);
   noofchances--;
   previous.push(guessnum);
   if(noofchances>0){
    if(guessnum>=1 && guessnum<=100){
        if(guessnum===randnumber){
            err.innerHTML='Cong ! Number is match! You Win.';
            guesses.innerHTML=previous;
            lastresult.innerHTML=noofchances;
        }
        else if(guessnum>randnumber){
             err.innerHTML="The Guess Number is greater.";
             guesses.innerHTML=previous;
             lastresult.innerHTML=noofchances;
        }
        else{
            err.innerHTML='The Guess Number is lower';
            guesses.innerHTML=previous;
            lastresult.innerHTML=noofchances;
        }
    }
    else{
        err.innerHTML='PLZ! Enter number b/W 1 And 100';
    }
   }
   else{
     err.innerHTML='You have no more changes left';
   }
  
});