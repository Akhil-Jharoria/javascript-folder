// Here we are learning about advance topic of Object


// const objOne=  Math.PI;
// console.log(objOne);

console.log(Object.getOwnPropertyDescriptor(Math,"PI"));


const myUser= {
    name:'akhil',
    age:21,
    company:'microsoft',
    package:'50 Lacks/annaum'
}

console.log(myUser);
console.log(Object.getOwnPropertyDescriptor(myUser,'company'));

Object.defineProperty(myUser,'company',{
    
     writable:false,
     enumerable:false,
     configurable:false
 })

 console.log(Object.getOwnPropertyDescriptor(myUser,'company'));


 for (let [key,value] of Object.entries(myUser)) {  // object is by default not 
                                                    //iterable that why we use entrites method that 
                                                    // return iterable array of enteries
    console.log(`${key} => ${value}`);
 }
