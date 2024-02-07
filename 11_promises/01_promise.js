const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); //to connect with .then
  }, 1000);
});
//resolved function
promiseOne.then(function () {
  console.log("Promise consumed");
});
//---------------------------->
const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task-2 is complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise-2 consumed");
});
//---------------------------->
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task-3 is complete");
    resolve({ username: "abhi", email: "a@email.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});
//---------------------------->
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "abhi", email: "a@email.com" });
    } else {
      reject("ERROR: Something went wrong!!");
    }
  }, 1000);
}) //we can use more than 1 option chaining .then
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "abhi", email: "a@email.com" });
    } else {
      reject("ERROR: Something went wrong!!");
    }
  }, 1000);
});
const consumePromiseFive = async () => {
  try {
    const resolve = await promiseFive;
    console.log(resolve);
  } catch (error) {
    console.log(error);
  }
};
consumePromiseFive();

const getAllUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getAllUsers();
//another method
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
