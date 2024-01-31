// function func(...parameters){}//function made
// func(...arguments)//function call
function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}

// sayMyName()
function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}
addTwoNumbers()//NaN
addTwoNumbers(3,5)//8
addTwoNumbers(3, "5")//35 as a string
addTwoNumbers(3, "a")//3a as astring
addTwoNumbers(3, null)//3
//it can store in a variable
let result = addTwoNumbers(2, 9)
console.log(result);//undefined-> it haven't return
console.log("---------------------------->");

function add(num1,num2){
    // let result = num1+num2
    // return result
    return num1 + num2
}
let result2 = add(2,5)
console.log(result2);//7

function loginUserMessage(username){
    // if(username===undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){//similar
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Abhijeet"));//Abhijeet just logged in
// console.log(loginUserMessage());//undefined just logged in//->without if else condition
console.log(loginUserMessage());//undefined//->with if else condition


//set default value 'sam' instead of undefined
function loginUserMessage2(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2());//sam just logged in
function calculateCartValue(...num1){
    // ...num1 -> rest operator
    return num1
}
console.log(calculateCartValue(200, 400, 500));//[200, 400, 500]
function calculateCartValue2(val1, val2, ...num1){
    // ...num1 -> rest operator
    return num1
}
console.log(calculateCartValue2(200, 400, 500, 300));//[500, 300]

const user = {
    username: "Abhijeet",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);//Username is Abhijeet and price is 199
handleObject({
    username: "sam",
    price: 399
})//Username is sam and price is 399

const myNewArray = [200, 400, 500, 300]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));//400
console.log(returnSecondValue([200, 400, 500, 300]));//400