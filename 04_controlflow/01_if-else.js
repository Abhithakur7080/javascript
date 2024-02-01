//if statement

let condition = true; //it may be true or false
if (condition) {
  console.log("Hello World");
}

let isLoggedIn = true
if(isLoggedIn){
    console.log("welcome to our website");
}

if(2<=2){//<,>,>=, ==, !=, ===, !== can be used
    // ==(checking) means only check value but ===(strict checking) check both value and its data type
    //
    console.log("YES");
}
//else condition
if(2=="2"){//checking
    console.log(true);//true
} else{
    console.log(false);
}
if(2==="2"){//strict checking
    console.log(true);
} else {//false
    console.log(false);
}

const score = 200;
if(score>=200){
    const power = "fly"
    console.log(`User Power ${power}`);
}
//console.log(`User Power ${power}`); power is not defined not in scope. use of var is show correctly here and not issue

//shorthand notation
const balance = 1000
if(balance>500) console.log("test"); //senicolon means end of block
// if(balance>500) console.log("test"), console.log("test1"); //you can use like this but it's not better coder

//else if condition
if(balance<500){
    console.log("less than 500");
} else if(balance>900){
    console.log("more than 900");
} else{
    console.log("more than 2000");
}

const userLoggedIn = true
const hasDebitCard = true
if(userLoggedIn && hasDebitCard){
    console.log("Allow to purchase course");
}
const loggedFromEmail = true;
const loggedFromGoogle = false;
if(loggedFromEmail || loggedFromGoogle){
    console.log("User Logged In");
}