//object literal
const user = {
    username: "Abhijeet",
    loginCount: 8,
    signIn: true,
    getuserDetails: function(){
        // console.log("Got User details from database");
        // console.log(`Username: ${username}`);//username is not defined
        console.log(`Username: ${this.username}`);

    }
}
// console.log(user.username);
console.log(user.getuserDetails());

let myArray = [1,2,3]
console.log(myArray);

console.log(this);//by default window object

const user2 = {
    username: "Abhi",
    loginCount: 8,
    signIn: true,
}

// new keyword is a constructor function
// const promiseOne = new Promise()
// const date = new Date()

function User (username, loginCount, signIn){
    this.username = username
    this.loginCount = loginCount
    this.signIn = signIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // this is an object made by self
    return this
}
// const userOne = User("abhijeet", 12, true)
// const userTwo = User("abhi", 12, true)//it changes previous abhijeet -> abhi
const userOne = new User("abhijeet", 12, true)
const userTwo = new User("abhi", 12, true)//so we have to use new keyword always in promise we use new keyword also
//call constructor fuction by new keyword
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);