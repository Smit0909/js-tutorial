const promiseOne = new Promise(function (resolve, reject) {
  //do an async task
  //db calls, cryptography, network
  setTimeout(() => {
    console.log("async task 1");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise successful");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 is successful");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "smit", password: "123456" });
  }, 1000);
}).then(function (data) {
  console.log(data);
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "hero@123", password: "65343" });
    } else {
      resolve("Error: something went wrong");
    }
  }, 1000);
})
  .then(function (response) {
    console.log(response);
    return response.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Something was happened, either promise resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "user@123", password: "1234323" });
    }
    else{
        reject('error: something went wrong');
    }
  }, 1000);
});

// async function consumePromiseFive(){

// }
