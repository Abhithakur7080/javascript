let myArr = [0,1,2,3,4];//collection of varrious items in a variable
//in javascript array can be expandable

const myHeroes = ["ironman", "thor"];
const myArr2 = new Array(1,2,3,4);
console.log(myArr[1]);

//Arrays methods
myArr.push(6)//add value in last
myArr.push(7)
console.log(myArr);//[ 0, 1, 2, 3, 4, 6, 7 ]

myArr.pop();//remove last value
console.log(myArr);//[ 0, 1, 2, 3, 4, 6 ]

myArr.unshift(5)//add value in first
console.log(myArr);//[ 5, 0, 1, 2, 3, 4, 6 ]

myArr.shift()//remove first value
console.log(myArr);//[ 0, 1, 2, 3, 4, 6 ]

console.log(myArr.includes(9));//false
console.log(myArr.indexOf(9));//-1
console.log(myArr.indexOf(3));//3<- value

const newArr = myArr.join();
console.log(newArr);//0,1,2,3,4,6
console.log(typeof newArr);//string

//slice and splice
const myArr1 = myArr.slice(1,3);//start with 1th index and ends with below 3rd index
console.log(myArr1);//[ 1, 2 ]
console.log(myArr);//[ 0, 1, 2, 3, 4, 6 ] slice only find and give the output but not change

const myArr3 = myArr.splice(1,3);//start with 1th index and ends with 3rd index
console.log(myArr3);//[ 1, 2, 3 ]
console.log(myArr);//[ 0, 4, 6 ] splice changes array and get updated



