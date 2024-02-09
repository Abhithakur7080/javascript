let myName = "Abhijeet      "

// console.log(myName.length);//8-> without use space
console.log(myName.length);//14 with use space
console.log(myName.trim().length);//8 removed space using trim()

let myHeroes = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}
Object.prototype.abhijeet = function(){
    console.log(`Abhijeet is present in all objects`);
}
Array.prototype.helloAbhijeet = function(){
    console.log(`Abhijeet says hello`);
}
//all object get power through the object
// heroPower.abhijeet()//by object
// myHeroes.abhijeet()//ay array

// heroPower.helloAbhijeet()//not have property to access
myHeroes.helloAbhijeet()

const User = {
    name: "Abhi",
    email: "abhi@email.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

//set property but it's old
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport //get access property of previous object
}
Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Abhijeet           "
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is ${this.trim().length}`);
}
anotherUsername.trueLength()//True length is 8
"abhijeet kumar".trueLength()//True length is 14