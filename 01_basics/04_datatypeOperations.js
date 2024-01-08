let value = 3;
let negValue = -value;
console.log(negValue);//-3

//Basic operations
console.log(2+2);//addition 4
console.log(2-2);//substraction 0
console.log(2*2);//multiplication 4
console.log(2**2);//power 2^2=4 it can be anything like 2^25
console.log(2/2);//division 1
console.log(2%2);//modulo gives remainder 0

//some tricky operations
let str1 = "abhi";
let str2 = " kumar";
let str3 = str1 + str2;
console.log(str3);//abhi kumar

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32

// console.log(3+4*5%3);//don't do like this use paranthesis to gives priority operations you want
// console.log((3+4)*5%3);//like this

//bad way to write some codes
// console.log(+true);//gives priority first what operation you want first
// console.log(+"");//gives priority first what operation you want first

let num1, num2, num3;
num1=num2=num3=2+2 //this type of tricky behaviour not prefer to use because it decrease readibility its too advance behaviour.
let gameCounter = 100;
let num = gameCounter++;//100 101
// let num = ++gameCounter;//101 101
console.log(num, gameCounter)