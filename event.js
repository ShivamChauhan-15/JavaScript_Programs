//We have three way to add an event
/*const btn=document.querySelector(".btn-headline");
console.dir(btn);
btn.onclick=function(){
    console.log("You Clicked Me!!!");
}*/
//We can't use this way beacuse we cannot assign click event more than once

// Method- addEventListener
/*const btn=document.querySelector(".btn-headline");
btn.addEventListener("click",function(){
    console.log("you clicked me!!!");
});*/
// using arrow function
/*const btn=document.querySelector(".btn-headline");
btn.addEventListener("click",()=>{
    console.log("click by arrow function");
});*/

// this keyword
const btn=document.querySelector(".btn-headline");
/*btn.addEventListener("click",function(){
    console.log("you clicked me");
    console.log("value of this ");
    console.log(this);
});*/

// in case arrow function the value of this is window object while in case of normal function the value of this is button itself
btn.addEventListener("click",()=>{
    console.log("you clicked me");
    console.log("value of this ");
    console.log(this);
});