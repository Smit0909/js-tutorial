let heros = ['thor', 'ironman', 'thanos'];

let heroPower = {
    thor: 'hammer',
    ironman: 'ironSuit',
    thanos: 'riseFromDead',

    getThorPower: function(){
        console.log(`thor power is ${this.thor}`);
    }
}

Object.prototype.smit = function(){
    console.log('smit is present in all object');   
}

Array.prototype.heySmit = function(){
    console.log('smit says hello');
}

// heroPower.smit();
// heros.smit();
// heros.heySmit();
// heroPower.heySmit();


// Inheritance
const User = {
    name: 'smit',
    email: 'smit@user.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);


// own property or method

let anotherUserName = 'smitcoder   ';

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength();
"smit   hello    world".trueLength();