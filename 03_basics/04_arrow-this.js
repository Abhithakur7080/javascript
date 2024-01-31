const user = {
  username: "abhijeet",
  price: 999,
  welcomeMessage: function () {
    console.log(`Hey ${this.username}, welcome to our website`);
    console.log("inner this", this);//{username: 'sam', price: 999, welcomeMessage: ƒ}
  },
};
// user.welcomeMessage()//Hey abhijeet, welcome to our website
user.username = "sam";
user.welcomeMessage();//Hey sam, welcome to our website

console.log("outer this", this);//Window {window: Window, self: Window, document: document, name: '', location: Location, …}-> in node {} refer empty object

function func(){
    // console.log(this);
    const username = "abhi"
    console.log(this.username);//undefined because of this work on context object not in functions
}
func()
const func2 = function(){
    // console.log(this);
    const username = "abhi"
    //similar
    console.log(this.username);//undefined because of this work on context object not in functions
}
func2()

const func3 = () =>{
    // console.log(this);
    const username = "abhi"
    //similar
    console.log(this.username);//undefined because of this work on context object not in functions
}
func3()

//arrow function ()=>{} | ()=>()
//explicit return {} means need using return
const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(3,4));//7
//implicit return () means not using return
const addTwo2 = (num1, num2) => (num1+num2)
console.log(addTwo2(3,4));//7