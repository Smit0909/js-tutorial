const tempo = [0, 1, "smit", true];

const temp = new Array("xyz", "abc");

const arr = [0,1,2,3,4,5];

// Array methods

// arr.push(6);
// arr.pop();

// arr.unshift(9); //inserts value at first pos.
// arr.shift(); //pops first element;


// console.log(arr.includes(9));
// console.log(arr.indexOf(9));

const newArr = arr.join();

// console.log(arr);
// console.log(typeof newArr);

//slice , splice

console.log("A ", arr);

const new1 = arr.slice(1,3); //doesn't manipulates original array
console.log(new1);
console.log("B ", arr);

const new2 = arr.splice(1,3); //manipulates original array
console.log(new2);
console.log("C ", arr);


