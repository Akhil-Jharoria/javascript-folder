// Here we are learning about the declaration of the variables in javascript.

// there are three keywords
  //const
  //let
  //var

  const accoundId=12345;
  let userEmail="akhiljharoria7898@gmail.com";
  var accountPass=123455566;

//   console.log(accoundId);
//   console.log(userEmail);
//   console.log(accountPass);

//console.table([accoundId,accountPass,userEmail]);       //it return the output in the form of the table
//console.table([accountPass,accoundId,userEmail]);

{ 
    // const accoundId=54321;
    // console.log("inside the block "+accoundId);
}

//  accoundId=89765;        //not allowed
//console.log("outside the block "+accoundId);

// userEmail=34;                    //allowed in javascript
// console.log(userEmail);

// accountPass=736748723;           //allowed in javascript
// console.log(accountPass);


 var accountPass="hello history";
 console.log(accountPass);
{
    let userEmail="ahhhik@gmail.com";
    console.log("inside the block"+userEmail);
    // console.log("inside the block"+accountPass);

}
console.log("outside the block"+userEmail);



// in modern javascript recommanded to not to use the var keyword, because it has the global scope
// so it can be accessed very easily anywhere in the program


