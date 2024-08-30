"use strict"; //treat all js code as newer version

// alert("Hello"); //we are using nodejs, not browser
// code readability should be high

/* datatypes:
Primitive:
Number => 2 to the power 53
bigInt
String =>""
Boolean => true/false
null => standalone value
undefined => value not defined;
Symbol => unique

Non-Primitive(Reference)
Objects
Arrays
Functions

*/

//js is dynamically typed language => that means no need to specify the datatype of variable at declaration.

// console.log(typeof null); //object => mostImp

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id == anotherId);


// Stack(Primitive), Heap(Non-Pritive);

let myName = "smit";
let anotherName = myName;  //copy of myName
anotherName = "abc";

// console.log(myName);
// console.log(anotherName);

let userOne = {
    email: "abc@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne; //pointing to userOne not copy

userOne.email = "xyz@gmail.com";
console.log(userTwo.email);



