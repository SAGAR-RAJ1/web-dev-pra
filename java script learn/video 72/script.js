

console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container").children 




// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }
function getRandomColor(){
    let val1 = Math.ceil(  Math.random()*255);
    let val2 = Math.random()*255;
    let val3 =Math.random()*255;
    return  `rgb(${val1},${val2},${val3})`
}
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })

 
let val1=55;
let boxes = document.getElementsByClassName("box")


console.log(boxes)
console.log(val1)

Array.from(boxes).forEach(e => {
    console.log(e)

    e.style.backgroundColor =  getRandomColor();
    e.style.color=getRandomColor();
}); 



console.log("sagar raj is god")




