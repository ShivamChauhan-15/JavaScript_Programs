const rootNode=document.getRootNode();
//console.log(rootNode.childNodes);
const htmlElementNode=rootNode.childNodes[0];
//console.log(htmlElementNode);
//console.log(htmlElementNode.childNodes);
/*const headElementNode=htmlElementNode.childNodes[0];
const textElementNode=htmlElementNode.childNodes[1];
const bodyElementNode=htmlElementNode.childNodes[2];
//console.log(headElementNode);
console.log(headElementNode.parentNode);
console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.nextSibling);
console.log(headElementNode.nextElementSibling);
*/

// To move parent from child
const h1=document.querySelector("h1");
const div=h1.parentNode;
//console.log(div);
/*div.style.color="#efefef";
div.style.backgroundColor="#333";
const body=h1.parentNode.parentNode;
body.style.color="blue";
body.style.backgroundColor="green";
const head=document.querySelector("head");
const title=head.querySelector("title");
console.log(title);
console.log(title.childNodes);
*/

//To get element only use children property
const container=document.querySelector(".container");
console.log(container.children);