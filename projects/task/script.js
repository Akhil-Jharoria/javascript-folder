//Code for task 1
// const txt=document.querySelector('#txt');
// const butt=document.querySelector('#clickme')
// //console.log(txt);
// //console.log(butt);

// butt.addEventListener('click',(obj)=>{
//     txt.style.display='none';
// });



//code for task two

// const field=document.querySelector('#field');
// //console.log(field);

// field.addEventListener('click',(obj)=>{

//      let fieldCoords = field.getBoundingClientRect();
//      let ballCoords = {
//           top: obj.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
//           left: obj.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
//         };


//    // prevent crossing the top field boundary
//    if (ballCoords.top < 0) ballCoords.top = 0;

//    // prevent crossing the left field boundary
//    if (ballCoords.left < 0) ballCoords.left = 0;
     
//       // // prevent crossing the right field boundary
//       if (ballCoords.left + ball.clientWidth > field.clientWidth) {
//           ballCoords.left = field.clientWidth - ball.clientWidth;
//         }
     
//         // prevent crossing the bottom field boundary
//         if (ballCoords.top + ball.clientHeight > field.clientHeight) {
//           ballCoords.top = field.clientHeight - ball.clientHeight;
//         }

//         ball.style.left = ballCoords.left + 'px';
//         ball.style.top = ballCoords.top + 'px';
// });



//code for task three;


let toogle=true;

const list=document.querySelector('#list');
const title=document.querySelector('.title');
// const menu=document.querySelector('.menu');
const menu=document.querySelector('#Sweeties');

title.addEventListener('click',()=>{

       toogle=!toogle;

     if(toogle){
          list.remove();
     }
     else{
          menu.appendChild(list)
     }
});