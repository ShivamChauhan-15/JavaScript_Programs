const myArray=[1,2,3];
let[x,y,z]=myArray;
console.log('Value of x: ',x);
console.log('Value of y: ',y);
console.log('Value of z: ',z);
x=5;
console.log("x=",x);
const[p,q]=myArray;
//p="7";    //Not Allowed
const A1=['1'];
var[a,b]=A1;
console.log(a);
console.log(b);
const A2=['A','B','C'];
var[c,,e]=A2;
console.log("c=",c);
console.log("e=",e);
var [a,b]=[1,2,3];
console.log("a=",a);
console.log("b=",b);
var B=['1','2','3','4'];
var[a,b,...c]=B;
console.log(c);
var D=[1,2,[3,4,5],6];
var[a,b,c,d]=D;
console.log(c);

