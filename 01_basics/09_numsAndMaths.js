/**************************NUMBERS************************************/

const score = 400;// it defined only in number
console.log(score);
const balance = new Number(400); // it defined new object in number
console.log(balance);
console.log(typeof balance.toString());//string
console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//400.00 -> mainly use in price denotation because i want price after decimal only two values

 const price = 234.79099709;
 console.log(price.toFixed(2));//234.79

 const price2 = 2343.574625269;
 console.log(price2.toPrecision(2));//2.3e+3 = 2.3 * 10^3 -> it precise to only two values if after decimal not happen then only two value available before decimal.

 const price3 = 123.67898;
 console.log(price3.toPrecision(3));//124
 console.log(price3.toPrecision(4));//123.7

 const hundreds = 1000000;
 console.log(hundreds.toLocaleString('en-IN'));//10,00,000 -> in Indian standered format
 console.log(hundreds.toLocaleString('en-US'));//1,000,000 -> in US standered format

 console.log(Number.MAX_SAFE_INTEGER) //9007199254740991 -> max value to be added then its safe
 console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991 -> min value to be added then its safe
 console.log(Number.MAX_VALUE) // 1.7976931348623157e+308 -> max range of the value
 console.log(Number.MIN_VALUE) // 5e-324 -> min range of the value

/**************************MATHS*************************************/
console.log(Math);//Object [Math] {}
console.log(Math.abs(-4));//4 it returns if value is is negative then changes to positive this value always positive

console.log(Math.round(4.3));//4 it make round figure of value
console.log(Math.ceil(4.2));//5 it returns if more than 4 than goes to 5 not any roundoff just more than 4 than 5 -. return greatest value
console.log(Math.floor(4.9));//4 if less than 5 than return 4 not any roundoff just less than 5 results 4 -> return lowest value
console.log(Math.min(4,3,6,8,5));//3 -> gives minimum value
console.log(Math.max(4,3,6,8,5));//8 -> gives maximum value

console.log(Math.random())//gives a random value start with 0.___ of Integer range
console.log((Math.random()*10) + 1);// gives  value start with oneNum.____ of Integer value
console.log(Math.floor((Math.random()*10) + 1));//oneNum

const min = 10;
const max = 20;

console.log(Math.floor((Math.random()*(max-min +1)+ min)))

