const newHero = ["hulk", "superman"];
console.log(newHero);
/*
['hulk', 'superman']
0: "hulk"
1: "superman"
length: 2
[[Prototype]]: Array(0)
*/
//after open

function multiplyBy5(num) {
  // this.num = num
  return num * 5;
}
multiplyBy5.power = 2;
console.log(multiplyBy5(5)); //25
console.log(multiplyBy5.power); //2
//so function is both object and function
console.log(multiplyBy5.prototype); //constructor function
//basically function prototypes are by defult null

function createUser(username, score) {
  this.username = username;
  this.score = score;
}
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};
const Abhi = new createUser("Abhi", 25);
const Abhi2 = new createUser("Abhi2", 20);

Abhi.printMe()
