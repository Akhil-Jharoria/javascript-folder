//Here we are learning about the deStructuring of object and array.
//DeStructuring means assiging another name to any variable.

//Destructuring of object

const jsUser={
    name:'akhil',
    age:21,
    email:'akhiljharoria@microsoft.com'
};

// console.log(typeof jsUser.email);

const {name:nm,age:a,email:em}=jsUser;      //destructureing

console.log(nm);
console.log(a);
console.log(em);

//Destructuring of array
