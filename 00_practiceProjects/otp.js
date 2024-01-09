let min = 10000;
let max = 100000;

const randomValue = Math.random();
const setDecimalPlaces = max-min+1//add 1 because we don't want to add o else otp will 00000 this is not valid
const startWithValue = min;

let otp = Math.floor(randomValue*setDecimalPlaces+startWithValue);
console.log(otp);