const person={name:'Shivam',age:20};
console.log("Details:",person);
const person1={
    Name:"Shivam",
    Age:22,
    Hobbies:["Listening Song","Driving","Riding"]
}
console.log(person1);
console.log("Hobbies are:",person1.hobbies);

//ADD KEY VALUE PAIR IN OBJECTS
person1.Gender='male';
console.log(person1);
person1["Address"]="Noida";
console.log(person1);

//ACCESS DATA WITH [] NOTATION
console.log(person1['Name']);
console.log(person1['Hobbies']);

//Difference b/w dot and bracket notation
const key="Email";
person1[key]='xyz@gmail.com';
console.log(person1);
person1.College="JSS";
console.log(person1);

//for in loop in Objects
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

//for of loop
for(let i of Object.keys(person))
    console.log(i);     //Give keys

for(let i of Object.keys(person))
    console.log(person[i]);     //Give values

//Computed Properties
const key1="obj1";
const key2="obj2";
const value1="Student";
const value2="Teacher";
/*const obj={
    [key1]:value1,
    [key2]:value2
}
console.log(obj);*/

            //OR
const obj={};
obj[key1]=value1;
obj[key2]=value2;
console.log(obj);

//Spread Operator in Objects
const obj1={
    key1:"value1",
    key2:"value2"
};
const obj2={
    key1:"valueUnique",
    key3:"value3",
    key4:"value4"
};
const newObject={...obj1,...obj2,key5:"value5"};
console.log(newObject);
const newObject2={..."abc"};
console.log(newObject2);
const A={...["item1","item2"]};
console.log(A);

//OBJECT DESTRUCTURING
const stu={
    Name:"Shivam",
    Course:"MCA",
    RollNo:"22MCA002",
    College:"JSS",
};
let{Name:StuName,Course,...stuDetails}=stu;
console.log(StuName);
console.log(stuDetails);

//Objects inside Array
let users=[
    {userId:1, name:'X'},
    {userId:2, name:'Y'},
    {userId:3, name:'Z'},
]
for(let user of users)
    console.log(user.name);

//Nested Destructuring
let[user1,user2,user3]=users;
console.log(user1);
let[{name:userName,userId}, ,
    {userId:userThirdId}]=users;
console.log(userName);
console.log(userId);
console.log(userThirdId);
console.log(user2.name);


