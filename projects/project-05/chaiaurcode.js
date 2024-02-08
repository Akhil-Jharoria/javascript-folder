const insert=document.querySelector('#insert');

console.log(insert);
console.log('hello');

window.addEventListener('keydown',(event)=>{

     insert.innerHTML=`
     
    <div class='color'>
       <table>
            <tr>
                <th>Key</th>
                <th>code</th>
                <th>Location</th>
            </tr>
            <tr>
                <td>${event.key}</td>
                <td>${event.code}</td>
                <td>${event.location}</td>
            </tr>
        </table>
    </div>
  `;
});