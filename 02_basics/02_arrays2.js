const marvel_hereoes = ["thor", "captain america", "hulk"];
const dc_heroes = ["superman", "flash", "batman"];

// const pushArray = marvel_hereoes.push(dc_heroes)
//array can get any type of data in javascript
// console.log(pushArray);
/*
[ 'thor', 'captain america', 'hulk', [ 'superman', 'flash', 'batman' ] ]
*/
// console.log(marvel_hereoes[3][1]);//flash
const concatArray = marvel_hereoes.concat(dc_heroes)
console.log(concatArray);
/*
[ 'thor', 'captain america', 'hulk', 'superman', 'flash', 'batman' ]
*/
//spread operator
const spreadLast = [...marvel_hereoes, ...dc_heroes]
console.log(spreadLast);
/*
[ 'thor', 'captain america', 'hulk', 'superman', 'flash', 'batman' ]
*/
const spreadFirst = [...dc_heroes, ...marvel_hereoes];
console.log(spreadFirst);
/*
[ 'superman', 'flash', 'batman', 'thor', 'captain america', 'hulk' ]
*/
//nested array
const numberArray = [1,2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
const numberArray2 = numberArray.flat(Infinity);
console.log(numberArray2);
/*
[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11 ]
*/
console.log(Array.isArray("abhi"));//false
console.log(Array.from("abhi"));//[ 'a', 'b', 'h', 'i' ]
console.log(Array.from({name: "abhijeet"}));//[]-> because of confusing on array making array of key or value which is not declared here so it will give an empty array.

let num1 = 20;
let num2 = 30;
let num3 = 40;
console.log(Array.of(num1, num2, num3));//[ 20, 30, 40 ]