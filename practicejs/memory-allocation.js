// here we see some memory allocation mechanism


// //primitives types get the memory in the stack
// let myName='akhil jharoria';
// let anotherName=myName;
// anotherName="chotu";

// console.log(myName);
// console.log(anotherName);

//non primitivies get the memory in the heap
//(Object,Array,function)


// const arr=[1,2,3,4];
// let arr2=arr;

// arr2[2]=5;
// arr2[3]=6;

// arr2.pop();

// console.log(`the value of arr is ${arr}`);
// console.log(`the value of arr2 is ${arr2}`);

const jsUser={
    name:'AKHIL',
    age:21,
    email:'akhiljharoria@microsoft.com'
};

const jsUser1=jsUser;

jsUser1.age=20;
console.log(jsUser);
console.log(jsUser1);
