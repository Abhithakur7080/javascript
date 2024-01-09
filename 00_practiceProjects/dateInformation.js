let year = 2000;
let month = 0;//0 to 11 in javascript
let day = 23;

const myDate = new Date(year, month, day);
console.log(`Day: ${myDate.toDateString().substring(0,3)}, Month: ${myDate.toDateString().substring(4,7)}, Date: ${myDate.toDateString().substring(8, 10)}, Year: ${myDate.toDateString().substring(11,15)}`);
//Day: Sun, Month: Jan, Date: 23, Year: 2000