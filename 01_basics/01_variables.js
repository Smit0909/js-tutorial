const accountId = 9834; //can't be change;
let accountEmail = "xyz@gmail.com";
var accountPassword = "12345";
accountCity = "Gujarat"; //can be done like this, but it is not recommanded.
let accountState;

accountEmail = "abc@gmail.com";
accountPassword = "243434";
accountCity = "maharashtra";
// prefer not to use var, b/c of issue in block scope and functional scope;
console.log(accountId);

console.table([accountEmail, accountPassword, accountCity, accountState]);