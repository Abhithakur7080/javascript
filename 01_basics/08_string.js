const name = "abhi ";
const count = 50;
// console.log(name + count + "Nos");//outdated
//currently developers use backtic(``)
console.log(`Hello, my name is ${name} and my count is ${count}Nos`); //modern way syntax said to string interpollation
const gameName = new String("Abhi-kumar-thakur");
console.log(gameName); //Abhi
console.log(gameName[1]); //b -> access 0th key value of the string
console.log(gameName.__proto__); //{}
console.log(gameName.length); //4
console.log(gameName.toUpperCase()); //ABHI
console.log(gameName.charAt(2)); //h
console.log(gameName.indexOf("h")); //2
const newString = gameName.substring(0, 4);
console.log(newString); //Abhi
const anotherString = gameName.slice(-8, 4);
console.log(anotherString); //hi
const newStringOne = "        Abhi       ";
console.log(newString.trim()); //Abhi -> it remove whitespaces around string

const url = "https://users.com/abhi%20kumar";
console.log(url.replace('%20', '-'));//https://users.com/abhi-kumar
console.log(url.includes("user"));//true

console.log(gameName.split('-'));//[ 'Abhi', 'kumar', 'thakur' ] in array
