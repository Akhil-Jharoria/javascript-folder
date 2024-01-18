console.log("hello");

let sum=1234;
function myfun(){
    let sumInside=435;
    console.log("inside function",sum);

    function myfun2(){
        console.log(sumInside);
        let sumInside2=5678;
    }

    //console.log(sumInside2);
    myfun2();
}
//console.log(sumInside);
myfun();
console.log('outside function ',sum);