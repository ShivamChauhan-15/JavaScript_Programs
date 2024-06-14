//select element using get element by id
//const mainHeading = document.getElementById("main-heading");
//console.dir(document.getElementById("main-heading"));  //Actual Representation
//console.log(mainHeading);

// select element using query selector
/*const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);
const header = document.querySelector(".header");
console.log(header);
const navItem = document.querySelector(".nav-item");*/
//console.log(navItem); //It will return first element which has class nav-item
//const navItemAll = document.querySelectorAll(".nav-item");
//console.log(navItemAll);
// querySelectorAll return Node which is similar to Array

//Change text,textContent and innertext
// mainHeading.textContent="This is something else";
//console.log(mainHeading.textContent);
// It will give all text content whether it is visible on the webpage or not
//console.log(mainHeading.innerText);
// It will give only that content which is visible on the webpage

/*const mainHeading1=document.querySelector("div.headline h2");
console.log(mainHeading1);*/
//It give h2 of that div which has a class heaadline

//change the styles of elements
const mainHeading=document.querySelector("div.headline h2");
//mainHeading.style.color="blue";
//mainHeading.style.backgroundColor="blue";
//mainHeading.style.border="20px solid green";

//get and set attributes
const link=document.querySelector("a");
console.log(link);   //it give first anchor tag
console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(1));  //it remove element at 0 index

link.setAttribute("href","https://codprog.com");
console.log(link.getAttribute("href"));

/*
const inputElement=document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));*/

//Get multiple elements using getElement by class name
//Get multiple elements using querySelectorAll
//const navItems=document.getElementsByClassName("nav-item");  //give html collection
//console.log(navItems);
//console.log(navItems[2]);   //Particular index
//console.log(typeof navItems);
//console.log(Array.isArray(navItems));

/*
const navItems=document.querySelectorAll(".nav-item");   //give NodeList
console.log(navItems);*/

//Loops
//simple for loop
//for of loop
//foreach
//we can't use foreach method to iterate through HTMLCollection
/*let navItems=document.getElementsByTagName("a");
console.log(navItems);*/
/*for(let i=0;i<navItems.length;i++){
    //console.log(navItems[i]);
    const navItem=navItems[i];
    navItem.style.backgroundColor="#fff";
    navItem.style.color="green";
    navItem.style.fontWeight="bold";
}*/

//for of loop
/*for(let navItem of navItems){
    navItem.style.backgroundColor="#fff";
    navItem.style.color="green";
    navItem.style.fontWeight="bold";
}*/

//we can convert html collection to array item then apply foreach loop
/*navItems=Array.from(navItems);
console.log(Array.isArray(navItems));
navItems.forEach((navItem)=>{
    navItem.style.backgroundColor="#fff";
    navItem.style.color="green";
    navItem.style.fontWeight="bold";
});
*/
//We can apply all the three loops to node list
//let navItems=document.querySelectorAll("a"); 
/*for(let navItem of navItems){
    navItem.style.backgroundColor="#fff";
    navItem.style.color="green";
    navItem.style.fontWeight="bold";
}*/

//convert nodelist to array
let navItems=document.querySelectorAll("a");
navItems=Array.from(navItems);