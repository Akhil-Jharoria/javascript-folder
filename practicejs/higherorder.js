//Here we are going to learn about the higher order loops on array
//Here we see some higher loop

// const user={
//     name:'akhil',
//     age:21,
//     email:'akhiljharoria@gmail.com'
// };

// for (const key in user) {
//     console.log(user[key]);
// }

// const arr=[1,2,3,'akhil','jharoria'];
// for (const key in arr) {
//     console.log(arr[key]);
// }

//for of loop will not work for object
// const user={
//         name:'akhil',
//         age:21,
//         email:'akhiljharoria@gmail.com'
//     };

//     for (const key of user) {
//         console.log(key);
//     }

// const arr=[1,2,3,'akhil','jharoria'];
// for (const val of arr) {
//     console.log(val);
// }

// const arr=[1,2,3,'akhil','jharoria'];        //arrow fucntion

// let newarr=arr.forEach((val)=>{
//         console.log(val);
// });

// const arr=[1,2,3,'akhil','jharoria'];            //normal function
// let newarr=arr.forEach(fucntion print(val){
//         console.log(val);
// });

// const arr=[1,2,3,'akhil','jharoria'];
// let newarr=arr.forEach((val,index,arr)=>{            //index,arr is optional
//         console.log(val,index,arr);
// });

// const arr=[1,2,3,'akhil','jharoria'];
// function printMe(val){
//     console.log(val);
// }
// arr.forEach(printMe);

// const arr=[1,2,3,4,5,6,7,8,9];

// const newarr=arr.filter((num)=>{
//    return num<6;
// })

// console.log(newarr);

// const arr=[1,2,3,4,5,6,7,8,9];
// const newarr=arr.filter((num)=> (num<6))
// console.log(newarr);

// const arr=[1,2,3,4,5,6,7,8,9];
// let newarr=arr.map((val)=> (val+10));
// console.log(newarr);

const arr=[1,2,3,4,5,6,7,8,9];
let sum=arr.reduce((acc,curval,curindex,arr)=>{
    console.log(acc,curval,curindex,arr);
    return acc+curval;
},0);

console.log('the sum is',sum);

