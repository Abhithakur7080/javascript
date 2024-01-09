let myDate = new Date();
console.log(myDate)//2024-01-09T08:05:36.313Z
console.log(myDate.toString())//Tue Jan 09 2024 13:36:22 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString())//9/1/2024, 1:38:18 pm
console.log(myDate.toDateString());//Tue Jan 09 2024
console.log(myDate.toTimeString());//13:40:21 GMT+0530 (India Standard Time)
console.log(myDate.toISOString())//2024-01-09T08:10:58.839Z -> by default
console.log(typeof myDate);//object

const myCreatedDate = new Date(2023, 0, 23, 5, 30, 52);//(2023 year, 0 month, 23 day, 5 hours, 32 minutes, 52 seconds)
console.log(myCreatedDate.toLocaleString());// 23/1/2023, 5:30:52 am

//MM/DD/YYYY formats
const myCreatedDate2 = new Date("2023-01-23")//YYYY-MM-DD format
console.log(myCreatedDate2.toLocaleString());// 23/1/2023, 5:30:00 am

const myCreatedDate3 = new Date("01-23-2023")//MM-DD-YYYY format
console.log(myCreatedDate3.toLocaleString());// 23/1/2023, 12:00:00 am

let myTimestamps = Date.now();
console.log(myTimestamps);//1704791297562
console.log(myCreatedDate3.getTime());//1674412200000
console.log(Math.floor(Date.now()/1000));//1704791516

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);//1->jan
console.log(newDate.getDate());//9th date
console.log(newDate.getMinutes());//45 minutes
console.log(newDate.getHours());//14 hours

newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate);