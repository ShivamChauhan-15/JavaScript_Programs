let fruits=["Apple","Banana","Mango"];
console.log(fruits);
let mixed=[1,2.5,'String',null,undefined];
console.log(mixed);
let obj={};
console.log(typeof fruits); //array is an object
console.log(typeof obj);
console.log(Array.isArray(fruits));  //To check array
console.log(Array.isArray(obj));
//push()into array
fruits.push("Grapes","Pineapple");
console.log(fruits);
let poppedFruit=fruits.pop(); //Popped Element
console.log(poppedFruit);
console.log(fruits);
//unshift is used to insert element at starting
fruits.unshift('Orange');
console.log(fruits);
//shift is used to element from starting
var popElement=fruits.shift();
console.log("Popped element is ",popElement);
console.log(fruits);

//REFERNCE TYPE
let arr1=["item1","item2"];
let arr2=arr1;
console.log("Array1 is: ",arr1);
console.log("Array2 is: ",arr2);
arr1.push("item3");
console.log("After pushing an element Array1 is: ",arr1);
console.log("After pushing an element Array2 is: ",arr2);
var arr3=['item4','item5'];
var arr4=arr3;
console.log("Array3 is: ",arr3);
console.log("Array4 is: ",arr4);
arr3.push('item6');
console.log("After pushing an element Array3 is: ",arr3);
console.log("After pushing an element Array4 is: ",arr4);

//How to clone(copy)array
//        OR
//CONCATENATE TWO ARRAY
var A=['p','q'];
//USING SLICE OPERATOR
var B=A.slice(0);    //fastest operator
console.log("ArrayB is: ",B);
//USINNG CONCATENATE OPERATOR
var C=[].concat(A);
console.log("ArrayC is: ",C);
//USING SPREAD OPERATOR
var D=[...A];
console.log("ArrayD is: ",D);
A.push('r');
console.log(A);
console.log(B);//These ways do not reflect changes done in array A to Array B and C
//Add more items to ArrayB than ArrayA
B=A.slice(0).concat(['s','t']);
console.log("B: ",B);
B=[].concat(A,['u','v']);
console.log("B: ",B);
B=[...A,'w','x'];
console.log("B: ",B);
//LENGTH OF ARRAY
console.log(fruits.length);
var fruit=['Apple','Banana','Mango'];
console.log("Fruit have "+fruit.length+" elements");
console.log(fruit[fruit.length-2]);
let fruit2=[];
for(let i=0;i<fruit.length;i++){
    fruit2.push(fruit[i].toUpperCase());
}
console.log("Fruit2: ",fruit2);
let fruit3=[];
for(let i=0;i<fruit2.length;i++){
    fruit3.push(fruit[i].toLowerCase());
}
console.log("Fruit3: ",fruit3);
//let fruit4=fruit3.toUpperCase(); //Not Allowed
fruit3=['Kiwi'];
console.log(fruit3);
//Use const for creating array
const stu=['A','B','C'];
stu.push('D');
console.log(stu);
stu.pop();
console.log(stu);
//stu=['E'];     //Not Allowed

//Spread Operator in Array
const Arr=[..."abc"];
console.log(Arr);