const firstArr = ["hello", "world", "program"];
const secArr = ["game", "movie", "code"];

// firstArr.push(secArr);

// newArr = firstArr.concat(secArr);


const newArr = [...firstArr, ...secArr];
// console.log(newArr);

const anothArr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10], 11], 12];

const flatArr = anothArr.flat(Infinity);
// console.log(flatArr);

// console.log(Array.isArray("smit"));
// console.log(Array.from("smit"));
console.log(Array.from({name:"smit"})); //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));




