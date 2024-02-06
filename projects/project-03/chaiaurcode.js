//here we are writting the code for displaying the time on the screen.

const clok=document.querySelector('#clock');
//console.log(clok);
//console.log(time.toLocaleTimeString());
setInterval(() => {
    const Dat= new Date();
    const time=Dat.toLocaleTimeString();
    clok.innerText=time;
}, 1000);