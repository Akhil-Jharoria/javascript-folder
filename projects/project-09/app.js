
const baseURL=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/`;

const dropdown=document.querySelectorAll('.dropdown select');
const btn=document.querySelector('form button');
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const message=document.querySelector('.message');

dropdown.forEach((select)=>{
      for(currencyCode in countryList){
        // console.log(value,countryList[value]);
        let newElement=document.createElement('option');
        newElement.innerText=currencyCode;
        newElement.value=currencyCode;
        if(select.name==='from' && currencyCode==='USD'){
            newElement.selected='selected';
        }else if (select.name==='to' && currencyCode==='INR'){
            newElement.selected='selected';
        }
        select.append(newElement);
     }
     select.addEventListener('change',(event)=>{
            changeFlag(event.target);
     })
});
const changeFlag=(event)=>{
    let countryCode=countryList[event.value];
    let newLink=`https://flagsapi.com/${countryCode}/shiny/64.png`;
    const img=event.parentElement.querySelector('img');
    img.src=newLink;
}

btn.addEventListener('click', (event)=>{
   event.preventDefault();
     displaymessage();
});

const displaymessage= async()=>{
  
   let amount=document.querySelector('.amount input');
   let amountValue=amount.value;

   if(amountValue==='' || amountValue<1){
       amountValue=1;
       amount.value='1';
   }
    const url=`${baseURL}${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;  
    const response= await fetch(url);
    const data=await response.json();
    let rate=data[toCurr.value.toLowerCase()];
    const from=fromCurr.value;
    const to=toCurr.value;
    let amountInt=Number(amountValue);
    let finalamount=amountInt*rate;
    message.innerText=`${amountValue}${from}=${finalamount}${to}`;
}


window.addEventListener('load',()=>{
     displaymessage();
})
