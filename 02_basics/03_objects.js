//singleton -> when make with constructor then singleton made
//Object.create make like this

//object literals
const myId = Symbol("abhi")
const jsUser = {
    name: "abhijeet",
    "full name": "abhi kumar",
    [myId]: "myId1",
    age: 24,
    location: "Bengalore",
    email: "a@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["mondays", "Saturday"]
}

console.log(jsUser.email);//a@gmail.com
// console.log(jsUser."full name")// syntax not allowed
//no chance to access "full name" with dot method
console.log(jsUser["email"]);//a@gmail.com
console.log(jsUser["full name"]);//abhi kumar
//how to access symbol datatype variable because it is a unique datatype it cannot be accessable directly.
console.log(jsUser[myId]);//myId1

jsUser.email = "abhi@gmail.com"
Object.freeze(jsUser);//lock the object it cannot be changable more
jsUser.email = "abhi__1@gmail.com"//it will not change because i freezed the object jsUser.
console.log(jsUser);
/*
{
  name: 'abhijeet',
  'full name': 'abhi kumar',
  age: 24,
  location: 'Bengalore',
  email: 'abhi@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'mondays', 'Saturday' ],
  [Symbol(abhi)]: 'myId1'//here refer automatically to say it is a symbol key
}
*/
const user = {
    name: "abhijeet",
}
user.greetings = function(){
    console.log(`Hello Js User ${this.name}`);
}
// console.log(user.greetings);//[Function (anonymous)]
console.log(user.greetings());//Hello Js User abhijeet