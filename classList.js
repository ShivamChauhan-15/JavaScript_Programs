const sectionTodo=document.querySelector(".section-todo");
//console.log(sectionTodo);
//console.log(sectionTodo.classList);
// classList give the number of classes given to a particular section

//Add a class to a section
//sectionTodo.classList.add('bg-dark');

//To remove a class
//sectionTodo.classList.remove("container");

//To check whether a class exist in classList or not
/*const ans=sectionTodo.classList.contains("container");
console.log(ans);*/

//toggle can add a class if it is not present or remove a class if it is present
/*sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark");*/

const header=document.querySelector(".header");
console.log(header.classList);
header.classList.add("bg-dark");