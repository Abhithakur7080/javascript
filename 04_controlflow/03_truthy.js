const user = "abc@gmail.com";
if (user) {
  console.log("User logged in");
} else {
  console.log("User not logged in");
}

// falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//else are truthy value
//true, ....-2,-1,1,2...., "0"(string), 'false'(string), " "(empty space), [], {}, function(){}

const emptyArray = [];
if (emptyArray.length === 0) {
  console.log("Array is empty");
}
if (!emptyArray.length) {
  console.log("Array is empty");
}
const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Object is Empty");
}
if (!Object.keys(emptyObject).length) {
  console.log("Object is Empty");
}

//nullish coalescicing operator (??): null undefined
let val1;
// val1 = 5??10
// val1=null??10
// val1=undefined??15
val1 = null ?? 10 ?? 20;
console.log(val1);

//terniary operator
//condition ? if-statement : else-statement
let teaPrice = 10;
 teaPrice<=15?console.log("purchase"): console.log("not purchase");
