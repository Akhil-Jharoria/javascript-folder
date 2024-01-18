//Here we are learning about the object in the javascript.
//It is a very powerful in the javascript

//singleton(using constructor)
//  const myobj= Object();
//const myobj=Object.create;
//  console.log(myobj);
 
//using object literal

const sym=Symbol('key1');
const jsUser={
     name:'Akhil',
      age:21,
    'email':'akhiljharoria@microsoft.com',
    isLogedIn:false,
    location:'jabalpur',
    [sym]:'mykey1',
    loggedDay:['mon','wed','sat','thus'],
    myfunction: function() {
         console.log("inside the function");
    }
};

// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser['email']);
// console.log(jsUser.email);
// console.log(jsUser.location);
// console.log(jsUser['loggedDay']);
// console.log(jsUser['myfunction'()]);     worng
// console.log(jsUser[sym]);

// Object.freeze(jsUser);
// jsUser.age=19;
// console.log(jsUser);

// console.log(jsUser.myfunction);
// console.log(jsUser.myfunction());

const obj1={
    a:1,
    b:2
}
const obj2={
    b:4,
    c:1
}

const newobj={...obj1,...obj2};
console.log(newobj);

