// Here we are learning about the Promise

// Promise has two parts
        //1.Producing code
        //2.consuming code

//Producing code
const promiseOne= new Promise(function(resolve,reject){
     let err=false;

      if(!err){
        resolve('Hello! How are you');
      }
     else{
        reject('ERROR : 404 Not Found');
     }
       
})



//conusming code
promiseOne.then(function(value){
    console.log(value);
    return value;
}).then(function(value){
     console.log(value);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
     console.log('finally block is executed');
})



// Using Async/ await we can also handle promise

const promiseFive= new Promise(function(resolve,reject){

     setTimeout(() => {
         let err=false;
         if(!err){
            resolve('I LOVE YOU MY BABY!');
         }else{
            reject();
         }
     }, 2000);
});

async function consumePromiseFive(){
     try {
        const response= await promiseFive;
        console.log(response);
      //  const data=await JSON.parse(response);
     } catch (error) {
        console.log(error);
     }
}


consumePromiseFive();