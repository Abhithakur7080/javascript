// Two types of datatypes
//1st -> PRIMITIVE
// 7types -> String, Number, Boolean, null, undefined, symbol,BigInt

const score = 100;//Number
console.log(typeof score);//number
const score1 = 100.23;//Number
console.log(typeof score1)//number
const isEligible = true;//Boolean
console.log(typeof isEligible);//boolean
const temperature = null;//Null
console.log(typeof temperature);//object it is always differed not correct value
let userEmail = undefined;//let userEmail; is also correct syntax //Undefined
console.log(typeof userEmail);//undefined

const id = Symbol("134")
const newId = Symbol("134")
console.log(typeof id, typeof newId);//symbol symbol
console.log(id===newId);//false -> symbol datatype is used for unique so no matter about value are same

const bigNumber = 276495923474048n;
console.log(typeof bigNumber);//bigint
//2nd -> NON-PRIMITIVE (REFERENCE)
//Arrays, Objects, Functions
const heroes = ["iron man", "captain america", "hulk", "thor"];
console.log(typeof heroes);//object
const myObj =  {
    name: "Abhijeet kumar",
    age: 24,
}
console.log(typeof myObj);//object
const myFunc = function(){
    console.log("Hello World!");
}
console.log(typeof myFunc);//function
//is javascript a static or dynamic language?
//dynamic language why?
//it can be use both user interface and server side 