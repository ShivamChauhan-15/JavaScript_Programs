// static list vs live list
// querySelectorAll gives static list
// getElementBySomething gives live list
/*const listItems=document.querySelectorAll(".todo-list li");
const sixthLi=document.createElement("li");
sixthLi.textContent="item 6";
const ul=document.querySelector(".todo-list");
ul.append(sixthLi);
console.log(listItems);*/

//live list
const ul=document.querySelector(".todo-list");
const listItems=ul.getElementsByTagName("li");
const sixthLi=document.createElement("li");
sixthLi.textContent="item 6";

ul.append(sixthLi);
console.log(listItems);

// how to get the dimension of element(height,width)
const sectionTodo=document.querySelector(".section-todo");
// const info=sectionTodo.getBoundingClientRect();
const info=sectionTodo.getBoundingClientRect().width;
console.log(info);