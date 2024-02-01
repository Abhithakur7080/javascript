//javascript context
//1.Browser execution context
//2.Functional execution context
//3.Eval execution context

//PHASES -> STEPS
//1.Global execution ->set to this

//2.Memory creating Phase -> collect all variables and set initially undefined.
//val1=undefined
//val2=undefined
//addNum -> defination
//result1 = undefined
//result2 = undefined

//Execution Phase -> set values on creating variables
//va1=10;
//val2=20;
//addNum-> definition function create a box
/*
----------------------------
|  new variable enviroment |
|              +           |
|Execution thread          |
---------------------------
*/
//again in memory phase
//val1=undefined
//val2=undefined
//total = undefined
//again in execution context-> data processing
//num1=10;
//num2=20;
//total=30; total return in global execution context
let val1=10;//initially undefined
let val2=20;//initially undefined
function addNum(num1, num2){//initially defination
    let total = num1+num2;
    return total
}
let result1 = addNum(val1, val2)//initially undefined
let result2 = addNum(10, 2)//initially undefined

//make this function in google chrome/inspect/source/snipppets/then play debug to see the call stack execution
function one(){
    console.log("one")
    two()
} 
function two() {
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one();
two();
three();