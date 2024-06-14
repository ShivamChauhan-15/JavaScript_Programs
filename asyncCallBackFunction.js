// Normal Callback Function
/*function getTwoNumbersAndAdd(number1,number2,onSuccess,onFailure){
    if(typeof number1==="number" &&typeof number2==="number"){
        onSuccess(number1,number2);
    }
    else{
        onFailure();
    }
}
getTwoNumbersAndAdd(4,"5",(num1,num2)=>{
    console.log(num1+num2);
},()=>{
    console.log("Wrong data type");
    console.log("Please numbers only");
});
*/

// Callback function in Asynchronous Programming
// callbacks, callback hell, pyramid of dom
/*const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
setTimeout(()=>{
    heading1.textContent="Heading 1"
    heading1.style.color="violet";
    setTimeout(()=>{
        heading2.textContent="Heading 2";
        heading2.style.color="red";
    },1000)
},1000);
*/
const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");
function changeText(element,text,color,time,onSuccessCallback,onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent=text;
            element.style.color=color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }
        else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    },time)
}
changeText(heading1,"one","violet",2000,()=>{
    changeText(heading2,"two","purple",2000,()=>{
        changeText(heading3,"three","red",2000,()=>{
            changeText(heading4,"four","pink",2000,()=>{
                changeText(heading5,"five","yellow",2000,()=>{
                    changeText(heading6,"six","blue",2000,()=>{
                        changeText(heading7,"seven","orange",2000,()=>{
                        
                        },()=>{console.log("Heading7 does not exist")})
                    },()=>{console.log("Heading6 does not exist")})
                },()=>{console.log("Heading5 does not exist")})
            },()=>{console.log("Heading4 does not exist")})
        },()=>{console.log("Heading3 does not exist")})
    },()=>{console.log("Heading2 does not exist")})
},()=>{console.log("Heading1 does not exist")})