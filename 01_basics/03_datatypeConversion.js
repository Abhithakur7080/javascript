//string to number
let score = "10"//string
let score1 = "10abc"//string
console.log(typeof score, typeof score1);//string, string
console.log(score, score1);//"10", "10abc"

let scoreInNumber =  Number(score);//converted to number
console.log(typeof scoreInNumber)//number
console.log(scoreInNumber);//10

let scoreInNumber1 =  Number(score1);//converted to number
console.log(typeof scoreInNumber1)//number
console.log(scoreInNumber1);//NaN->not a number

//if score value is undefined then also its NaN.
//if score value is boolean then true->1 and false->0.
//if score value is null then value is 0.

//number or string to boolean
let loggedIn = 5;
let valueInBoolean = Boolean(loggedIn)
console.log(valueInBoolean);//true
// if loggedIn >0 then it gives true else false that'swhy show mainly true=1 and false=0
let myName = "abhi";// if string empty("") then false else true
let valueInBoolean1 = Boolean(myName)
console.log(valueInBoolean1);//true

let numberValue = 35;// if string empty("") then false else true
let valueInString = String(numberValue)
console.log(valueInString);//true
console.log(typeof valueInString)


//