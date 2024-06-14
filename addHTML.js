//innerHTML to add html element
/*const todoList=document.querySelector(".todo-list");
console.log(todoList);
console.log(todoList.innerHTML);*/

//to change innerHTML
// todoList.innerHTML="<li>New Todo</li>"  //it change complete old innerHTML
/*todoList.innerHTML+="<li>New Todo</li>";
todoList.innerHTML+="<li>Teach Student</li>";*/

//when you should use innerHTML, when you should not
// when we want to change complete inner html then we use innerHTML otherwise not

// The best to create new element is to used document.createElement()
// append, prepend, remove
/*const newTodoItem=document.createElement("li");
//const newTodoItemText=document.createTextNode("Teach Student");
//or
newTodoItem.textContent="Teach Students";
const todoList=document.querySelector(".todo-list");
todoList.append(newTodoItem);
console.log(newTodoItem);
// we can use appendChild also but it become older
// prepend add an element in starting
todoList.prepend(newTodoItem);
*/

// to remove an element
/*const todo1=document.querySelector('.todo-list li');
todo1.remove();
console.log(todo1);*/

//before() and after()
/*const newTodoItem=document.createElement("li");
newTodoItem.textContent="Teach Students";
const todoList=document.querySelector(".todo-list");
todoList.before(newTodoItem);
todoList.after(newTodoItem);*/

// elem.insertAdjacentHTML(where,html)
// beforebegin, afterbegin,beforeend, afterend
/*const todoList=document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend","<li>Teach Students</li>");
todoList.insertAdjacentHTML("beforebegin","<li>Teach Students</li>");
todoList.insertAdjacentHTML("afterend","<li>Teach Students</li>");
// todoList.insertAdjacentHTML("afterbegin","<li>Teach Students</li>");*/