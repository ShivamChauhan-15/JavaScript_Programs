/*console.log("Start Script");
function hello(){
    console.log("inside the function");
}
setTimeout(hello,1000);
console.log("Script end");
*/

// using arrow function
/*console.log("Start Script");
setTimeout(()=>{
    console.log("inside the setTimeout");
},1000);
for(let  i=1;i<100;i++)
    console.log("hello");
console.log("Script end");*/

// setTimeout return an id
/*console.log("Start Script");
const id=setTimeout(()=>{
    console.log("inside the setTimeout");
},1000);
for(let  i=1;i<100;i++)
    console.log("hello");
console.log("setTimeout id is",id);
// clearing time out
clearTimeout(id);
console.log("Script end");*/

// setInterval
/*console.log("Start Script");
setInterval(()=>{
    console.log(Math.random());
},1000);
console.log("Script end");*/

// Changing background color
const body =document.body;
const button=document.querySelector("button");
const intervalId=setInterval(()=>{
    const red=Math.floor(Math.random()*126);
    const green=Math.floor(Math.random()*126);
    const blue=Math.floor(Math.random()*126);
    const rgb=`rgb(${red},${green},${blue})`;
    body.style.background=rgb;
},1000);
button.addEventListener("click",()=>{
    clearInterval(intervalId);
    button.textContent=body.style.background
})
console.log(intervalId);