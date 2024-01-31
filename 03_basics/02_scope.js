// let a = 20;
// const b= 10;
// var c= 30;
//all are globally scope currently
// console.log(a,b,c);//20 10 30
// -------------->
var c = 300;
if (true) {
  let a = 20;
  const b = 10;
  var c = 30;
}
// console.log(a); //not defined in scope
// console.log(b); //not defined in scope
// console.log(c); //30-> var global scope so it can access from anywhere
console.log(c); //30->var c=300 cannot get her value
//--------------->
//better way to approach
let a = 300; //in global block
if (true) {
  let a = 20; //in inner block
  const b = 10;
  console.log("Inner: ", a); //20
}
console.log("Outer: ", a); //300
