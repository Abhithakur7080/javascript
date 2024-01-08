const accountId = 144553; 
let accountEmail = "abhi@gmail.com";
var accountPassword = "12345";
accountCity = "mumbai";// default variable it can use like as var globally
// accountId =  2; //not allow to change
accountEmail = "a@gmail.com";
accountPassword = "123"
// console.log(accountId);//144553
// console.log(accountEmail);//a@gmail.com
// console.log(accountPassword);//123

//let a; // let must be initialized else it is undefined.
//const b; // not prefer to use like this because it must be initalized and not changable.

/*
-> prefer not to use in "var" because of issue in block scope and functional scope.
-> let can be use for as per best it can changable and also used in block not in globally.
-> const can be use when we want to not change any value of variable and also use in block.
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
/*
┌─────────┬───────────────┐
│ (index) │    Values     │
├─────────┼───────────────┤
│    0    │    144553     │
│    1    │ 'a@gmail.com' │
│    2    │     '123'     │
│    3    │   'mumbai'    │
└─────────┴───────────────┘
*/