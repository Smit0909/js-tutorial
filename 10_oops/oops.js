const user = {
    username: "smit", 
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Fetched data from DB");
        // console.log(this.username);
        // console.log(this);

    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("smit", 12, true)
const userTwo = new User("spendsmart", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);