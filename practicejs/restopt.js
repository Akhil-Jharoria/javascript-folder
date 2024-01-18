// Here we learn about the 'rest operator' in js
// rest operator is very powerful in the js .when we want to pass so many number of 
// argument and we initililly not know the number of operator then we use rest operator

let sum=mySum(200,300,400,500,600,700);

function mySum(...num){                 //rest operator
    let sum=0;
    //console.log(typeof num);
   // console.log(Array.isArray(num));
   // console.log(num);
    
   for (let index = 0; index < num.length; index++) {
    sum+=num[index];
   }

    return sum;
}
console.log('My sum is',sum);



//default arugments

function myfun(name,domain='@microsoft.com'){
    let fullemail=name+domain;
    return fullemail;
}

let email=myfun('akhiljharoria','@amazon.com');

console.log('The email id is',email);