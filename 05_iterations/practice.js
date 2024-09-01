// Problem: Given an array of numbers, create a new array where each element is doubled.

// const arr = [1,2,3,4,5,6,7,8];
// console.log(arr.map((val) => val*2));

// Problem: Given an array of numbers, filter out all even numbers.
// console.log(arr.filter((val)=>val%2==0));

// Problem: Given an array of numbers, find the sum of all elements.
// console.log(arr.reduce((acc, val) => acc+val,0));

// Problem: Given an array of strings, calculate the total number of characters across all strings.
// const arr = ["apple", "banana", "cherry"];
// console.log(arr.map(word=>word.length).reduce((acc,lengthOfWord)=>acc+lengthOfWord,0));

// Problem: Given an array of objects representing people with name and age, return an array of names for people who are over 18.
// Input: [{name: "Alice", age: 20}, {name: "Bob", age: 17}, {name: "Charlie", age: 19}]
// Output: ["Alice", "Charlie"]
const arr = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
];
console.log(arr.filter((data)=> data.age>18).map((data) => data.name));

