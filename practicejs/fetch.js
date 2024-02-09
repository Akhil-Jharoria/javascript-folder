//Here we are learning about the fetch api

// const fetchRep=fetch('https://www.edamam.com/');

// fetchRep.then((response)=>{
//   //   console.log(response);
//      const data= response.json();
//      console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

async function getdata(){

    try {

       // const response= await fetch('https://api.github.com/users/Akhil-Jharoria');
        const response= await fetch('https://fakestoreapi.com/');
       // console.log(response);
        //console.log(typeof response);
          const data= await response.json();
          console.log(data);
    } catch (error) {
         console.log(error);
    }
}

getdata();