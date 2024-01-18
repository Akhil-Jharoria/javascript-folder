//Here we are learning about the arrow functions

//normal function
// function myfun(){
//     console.log(2+4);
// }
// myfun();

// const fun=()=>{
//     console.log('hello guys');
// }
// console.log(fun());

// const addNum=(num1,num2)=>{
//     return num1+num2;            //explict return 
// }

// let sum=addNum(2,4);
// console.log(sum);

// const addNum=(num1,num2)=>  (num1+num2);         //implicet return 

// let sum=addNum(3,6);
// console.log(sum);


// const addNum=(num1,num2)=> num1+num2;         //implicet return 
// let sum=addNum(3,6);
// console.log(sum);


// const fun=()=>({name:'akhil'});

// let obj=fun();
// console.log(obj);
// console.log(typeof obj);

const fun=()=>{
    console.log(this);
}

console.log(fun());

