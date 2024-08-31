const name = "smit";
const repoCount = 3;

// console.log(name[0]);


// console.log(name + repoCount + " value"); 
// console.log(`Hello ${name}, you have total ${repoCount} repositories.`);

const gameName = new String("smit_XD_com"); //another way to declare string.

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('_'));

const newString = gameName.substring(0,5); //can't use negative indexes;
// console.log(newString);

const anothString = gameName.slice(-7,5);
// console.log(anothString);

const url = "https://smit.com/smit%20prajapati";

// console.log(url.replace('%20', '-'));

console.log(url.includes('smit'));

console.log(gameName.split('_'));




