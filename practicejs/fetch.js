//Here we are learning about the fetch api
function myfunction(resp){
      console.log(resp);
      console.log('Inside my function ');
}

const fetchRep=fetch('https://fakestoreapi.com/products/');
fetchRep.then((response)=>{
  if(response.ok){
    const data= response.json();
    return data;
  }
})
.then((data)=>{
   
      console.log('the data is recieved successfully');
      //console.log(data);
      myfunction(data);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
  console.log('data is printed finally');
})

// async function getdata(){
//     try {
//        // const response= await fetch('https://api.github.com/users/Akhil-Jharoria');
//         const response= await fetch('https://fakestoreapi.com/products/');
//        // console.log(response);
//         //console.log(typeof response);
//           const data= await response.json();
//           console.log(data);
//     } catch (error) {
//          console.log(error);
//     }
// }
// getdata();