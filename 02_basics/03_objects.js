// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Smit",
    "full name": "Smit Prajapati",
    [mySym]: "mykey1",
    age: 18,
    location: "Gujarat",
    email: "smit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "smit@chatgpt.com"
// Object.freeze(JsUser) //to stop manipulation further
JsUser.email = "smit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());