let random  = Math.random();

let a = prompt("enter 1st number");
let b = prompt("enter operation");
let c = prompt("enter 2nd number");


let obj ={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",


}
if(random>0.1){
    //perform normally
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`);
}
else{
    c=obj[c]; 
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`);
}