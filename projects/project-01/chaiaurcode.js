// here we write the javascript code for the project one

const button=document.querySelectorAll('.button');
const body= document.querySelector('body')
//console.log(button);

// function myfunction(buttonid){
//     console.log('The clicked button is',buttonid);
//     body.style.backgroundColor=`${buttonid}`;
// }

button.forEach(function (button){
  console.log(button);

    button.addEventListener('click', function (event){
        //console.log(event);
        //console.log(event.target);

        console.log(event.target.id);
        body.style.backgroundColor=event.target.id;
    })
});