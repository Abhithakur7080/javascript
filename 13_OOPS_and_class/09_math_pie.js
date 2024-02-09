console.log(Math.PI); //3.141592653589793
Math.PI = 5;
console.log(Math.PI); //cannot overwritable->3.141592653589793

const discriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(discriptor);
/*
configurable: false
enumerable: false
value: 3.141592653589793
writable: false
*/

//how to create this type
const abhi = {
  name: "Abhijeet kumar",
  age: 23,
  isEligible: true,
  printMe: function(){
    console.log("here print me!!");
  }
};
console.log(Object.getOwnPropertyDescriptor(abhi)); //undefined
console.log(Object.getOwnPropertyDescriptor(abhi, "name"));
/*
configurable: true
enumerable: true
value: "Abhijeet kumar"
writable: true
*/

for (let [key, value] of Object.entries(abhi)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

Object.defineProperty(abhi, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(abhi, "name"));
/*
configurable: false
enumerable: false
value: "Abhijeet kumar"
writable: false
*/
//abhi cannot be changable currently

for (let [key, value] of Object.entries(abhi)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
//here see name property cannot be iterable because enumerable is false
/*
age : 23
isEligible : true
*/