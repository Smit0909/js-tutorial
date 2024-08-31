const score = 400;
// console.log(score);

const balance = new Number(5000);
// console.log(balance);

// console.log(balance.toFixed(2)); //after point how much precision

const anothNum = 34.65464;
// console.log(anothNum.toPrecision(3)); //total length of number how much

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));


//_________________________Maths________________________________________

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(3.3));
// console.log(Math.ceil(3.3));
// console.log(Math.floor(3.3));
// console.log(Math.min(3, 4, 1, 3));
// console.log(Math.max(3, 6, 7, 1, 9));

// console.log(Math.floor(Math.random() * 10) + 1); //now it can't be 0.

const max = 50;
const min = 10;

console.log(Math.floor(Math.random() * (max-min+1)) + min);
