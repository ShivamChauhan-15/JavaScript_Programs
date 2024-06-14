/*const firstButton=document.querySelector("#one");
firstButton.addEventListener("click",function(event){
    console.log(event);
})*/

/*const allButtons=document.querySelectorAll(".my-buttons button");
for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        //console.log(e.target);//kha se fire hua
        console.log(e.currentTarget);//konse button pr eventlistener attach tha
    })
}*/

//to change background and text color of button on click
const allButtons=document.querySelectorAll(".my-buttons button")
//console.log(allButtons.length);
allButtons.forEach(button=>{
    button.addEventListener("click",(e)=>{
        // console.log(e.target);
        e.target.style.backgroundColor="yellow";
        e.target.style.color="red";
    });
})