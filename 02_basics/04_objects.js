// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Rosh";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullName: {
            firstName : "smit",
            lastName : "prajapati"
        }
    }
}

// console.log(regularUser.fullName.userfullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// const obj4 = {obj1, obj2};

// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = {...obj1, ...obj2, ...obj3};

// console.log(obj4);

const users = [
    {
        id: 1, 
        email: "s@gmail.com"
    },
    {
        id: 1, 
        email: "s@gmail.com"
    },
    {
        id: 1, 
        email: "s@gmail.com"
    },
    {
        id: 1, 
        email: "s@gmail.com"
    }
]

// console.log(users[1].email);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    courseName: "js in hindi", 
    price: "free",
    courseInstructor: "smit"
}

// course.courseInstructor

const {courseInstructor: instructor} = course;
// console.log(instructor);

// json
// {
//     "name" : "smit",
//     "courseName": "js in hindi", 
//     "price": "free"
// }








