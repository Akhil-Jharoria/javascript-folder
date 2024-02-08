const start=document.querySelector('#start');
const stop=document.querySelector('#stop');
const body=document.querySelector('body');
let intervalevent;

function generateRandomColor() {
     const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
     let code = "";
      for (let i = 0; i < 6; i++) {
        code += hexArray[Math.floor(Math.random() * hexArray.length)];
       }
     return "#" + code;
    }


start.addEventListener('click',()=>{
    intervalevent=setInterval(() => {

            console.log('setinterval start');            
       
            const randomcolor=generateRandomColor();
          body.style.backgroundColor=`${randomcolor}`;

 }, 1000);
})

stop.addEventListener('click',()=>{
    
 console.log('set inteval stop');
    clearInterval(intervalevent);
    intervalevent=null;
})


