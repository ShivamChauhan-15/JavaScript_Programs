function sum(x,y,z){
    return x+y+z;
}
console.log(sum(2,3,5));
result = sum(2,3);
console.log(result);    //Give NaN
console.log(4+3+undefined);   //Give NaN
function isEven(x){
    return x%2===0;
}
console.log(isEven(3));

//FUNCTION EXPRESSION
const x=function(){
    console.log("Hello");
}
x();

//ARROW FUNCTION
const y=()=>{
    console.log("Hello World");
}
y();
/*const isOdd=(num)=>{
    return num%2!==0;
}*/
        //OR        //we can remove paranthesis iff parameter is one
const isOdd=num=>{
    return num%2!==0;
}
console.log(isOdd(7));

//HOISTING
hello();
function hello(){
    console.log("Hello World");
}
//console.log(a);
//var a="Hello India";    //Give Undefined
//let a="Hello India";      //Give Error
//const a ="Hello India";   //Give Error

//FUNCTION INSIDE FUNCTION
function app(){
    const myFunc=()=>{
        console.log("Hello from myFunc");
    }
    const addTwo=(n1,n2)=>{
        return n1+n2;
    }
    const mul=(n1,n2)=>n1*n2;
    console.log("inside app");
    myFunc();
    console.log(mul(2,3));
    console.log(addTwo(5,4));
}
app();

//LEXICAL SCOPE
const myVar="Value1";
function myApp(){
    function myFunc(){
        const myVar="value2";
        const myFunc2=()=>{
            console.log("Inside myFunc",myVar);
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc();
}
myApp();

//Block Scope and Function Scope
//let and const are block scope
//var is function scope
{
    const name="Shivam";
    console.log(name);
}
{
    const name="Mohit";
    console.log(name);
}
//In case of var
/*{
    var name="Rahul";
    console.log(name);
}
{
    console.log(name);
}*/
/*console.log(name);
function myApp(){
    if(true){
        let fName="Sohan";
        console.log(fName);
    }
    if(true){
        console.log(fName);
    }
    console.log(fName);
}
myApp();*/

//DEFAULT PARAMETERS
function addTwo(a,b=0){
    // if(typeof b==="undefine"){
    //     b=0;
    // }
    return a+b;
}
console.log(addTwo(2));
console.log(addTwo(4,5));

//REST PARAMETERS
function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(`c is`,c);
}
myFunc(3,4,5,6,7,8,9,10);
/*
function addAll(...numbers){
    let total=0;
    for(let num of numbers)
        total+=num;
    return total;
}
const add=addAll(2,4,7,8,6,3);
console.log(add);
*/

//PARAMETER DESTRUCTURING
const person={
    fName:"XYZ",
    gender:"male",
    age:50
};
//Simple Way
/*
function printDetails(obj){
    console.log(obj.fName);
    console.log(obj.gender);
    console.log(obj.age);
}*/
//By Destructuring
function printDetails({fName,gender,age}){
    console.log(fName);
    console.log(gender);
    console.log(age);
}
printDetails(person);

//CALLBACK FUNCTIONS
function myFunc2(name){
    console.log("Inside myFunc2");
    console.log(`Your name is ${name}`);
}
function myFunc3(cha){
    console.log("Hello there I am Func");
    cha("Shivam");
}
myFunc3(myFunc2);

/*
//FUNCTION RETURNING FUNCTION
function myFunc(){
    function hello(){
        return "How are you?"
    }
    return hello;
}
const ans=myFunc();
console.log(ans);
*/