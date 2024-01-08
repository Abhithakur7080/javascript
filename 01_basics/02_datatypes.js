"use strict" // treat all JS code as newer version.
//currently js is already  used a standered version use by default.
//it is used in older version of javascript.
//alert(3+3); //without html file it shows error and you can also use on console
// we use node js only not with browser.
console.log(3+3);
console.log("hello world") //by default it doesn't add semicolon so no metter you add semicolon or not


//DATATYPES
//number -> range -> 2 to power 53
let num = 25;
//bigint -> used for mainly big data only
let num2 = BigInt(678687450187189020432745789n);
//string = ""
let myName = "Abhi"
//boolean = true/false
let eligible = true
//null -> standalone value // special type of datatype
let error = null
//undefined -> when variable declared and not given any value
// let data; //undefined
let data = undefined;
//symbol-> its umique
let logo = Symbol("it's abhijeet")
//object ->most important datatype

//check all datatypes;
console.table( [
    { value: num, type: typeof num },
    { value: num2, type: typeof num2 },
    { value: myName, type: typeof myName },
    { value: eligible, type: typeof eligible },
    { value: error, type: typeof error },
    { value: data, type: typeof data },
    { value: logo, type: typeof logo },
  ]);
/*
┌─────────┬──────────────────────────────┬─────────────┐
│ (index) │            value             │    type     │
├─────────┼──────────────────────────────┼─────────────┤
│    0    │              25              │  'number'   │
│    1    │ 678687450187189020432745789n │  'bigint'   │
│    2    │            'Abhi'            │  'string'   │
│    3    │             true             │  'boolean'  │
│    4    │             null             │  'object'   │
│    5    │          undefined           │ 'undefined' │
│    6    │    Symbol(it's abhijeet)     │  'symbol'   │
└─────────┴──────────────────────────────┴─────────────┘
*/
