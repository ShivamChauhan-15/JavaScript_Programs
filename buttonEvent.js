/*const firstButton=document.querySelector("#one");
firstButton.addEventListener("click",function(){
    console.log("you clicked me");
});
*/

/*const allButtons=document.querySelectorAll("button");
//console.log(allButtons);
for(let button of allButtons){
    button.addEventListener("click",function(){
        //console.log("you clicked me!!");
        console.log(this.textContent)
    });
}*/
// in case of arrow function there is mistake here window is this which does not have text content
/*allButtons.forEach(function(button){
    button.addEventListener("click",function(){
        console.log(this);
    });
})*/