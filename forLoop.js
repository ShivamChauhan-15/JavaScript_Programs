//Normal For loop
/*for(let i=1;i<=10;i++)
    console.log(i);
//console.log(i);     //Gives error because i is declared inside loop 
*/
            //OR
/*for(var i=1;i<=5;i++)
    console.log(i);
console.log(i);     //Allowed with var keyword*/

//for of loop in array
const arr=['A','B','C'];
for(let i of arr)
    console.log(i);
const arr2=[];
for(let i of arr)
    arr2.push(i.toLowerCase());
console.log("Array2 is: ",arr2);

//for in loop in Array
const arr1=[1,2,3];
for(let i in arr1)
    console.log(arr1[i]);   

//for in loop in Objects
const person={name:'Shivam',age:20};
const person1={
    Name:"Shivam",
    Age:22,
    Hobbies:["Listening Song","Driving","Riding"]
}
for(let i in person1)
    console.log(i);     //Giving all the keys in object
for(let i in person1)
    console.log(person1[i]);  //Giving all the values 
console.log("Printing both key value ");
for(let i in person)
    console.log(`${i}:${person[i]}`);
            //OR
for(let i in person)
    console.log(i,":",person[i]);
console.log(Object.keys(person1));  //Print all keys of an object

//for of loop in Objects
for(let i of Object.keys(person))
    console.log(i);     //Give keys

for(let i of Object.keys(person))
    console.log(person[i]);     //Give values