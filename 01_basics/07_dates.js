let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 1, 15);
// let myCreatedDate = new Date(2024, 1, 15, 5, 2);
let myCreatedDate = new Date("2024-02-15");
// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp); //in msec
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));


