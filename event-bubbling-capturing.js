/*const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");

//event capturing
/*child.addEventListener("click",()=>{
    console.log("capture child");
},true);
parent.addEventListener("click",()=>{
    console.log("capture parent");
},true);
grandparent.addEventListener("click",()=>{
    console.log("capture grandparent");
},true);
document.body.addEventListener("click",()=>{
    console.log("capture body");
},true);

//event bubbling
child.addEventListener("click",()=>{
    console.log("you clicked on child");
});
parent.addEventListener("click",()=>{
    console.log("you clicked on parent");
});*/
/*grandparent.addEventListener("click",()=>{
    console.log("you clicked on grandparent");
});
document.body.addEventListener("click",()=>{
    console.log("you clicked on body");
});*/

//event delegation
const grandparent=document.querySelector(".grandparent");
grandparent.addEventListener("click",(e)=>{
    console.log(e.target);
});
