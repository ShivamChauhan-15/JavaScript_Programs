console.log("Hello World");
console.log("shivam");
"use strict";    
var value1=2;   
console.log(value1**2);  //Power
var value2=10;
console.log(value2);
let x=5;
console.log(x);
//let x=20;               //Not Alllowed
const pi=3.14;
let ar=pi*x*x;
console.log(ar);
let name='Shivam';
console.log(name.length);
substr=name.slice(1,5);    //Substring
console.log(substr);
console.log(typeof name);   //Gives Datatype of variable
let age=20;
age=age+"";
console.log(age);
console.log(typeof age);
//or
x=String(x);
console.log(typeof x);
name=Number(name);
console.log(typeof name);
// template string(variable substitutions)
var age1=22;
let y="Shivam Chauhan";
var aboutMe=`My name is ${y} and my age is ${age}`;
console.log(aboutMe);
            // OR

var aboutMe="My name is "+y+" and my age is "+age1;
console.log(aboutMe);

// Undefined
var firstname;
console.log(typeof firstname);
//Null
console.log(typeof null); //It gives object as output because it is a bug

//BigInt
console.log(Number.MAX_SAFE_INTEGER);
let myNum=BigInt(12);
let sameMyNum=123n;
let z=12;
console.log(myNum);
console.log(myNum+sameMyNum);
//console.log(myNum+z);          //Not Allowed

//== vs ===
let num1=7;
let num2="7";
console.log(num1==num2);
console.log(num1===num2);

//!= vs !==
console.log(num1!==num2);
console.log(num1!=num2);

//falsy values("",null,undefined,0)
var myName="";
console.log(myName);
if(myName)
    console.log(myName);
else
    console.log("Name is Empty");
    