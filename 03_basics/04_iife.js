// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//iife helps us to prevent pollution of global variables. means if we have declared one variable inside iife using var method(ex. var temp = 5;) then it is not accessible outside of iife.