//basic comparisions
console.log(2>1);//greater than
console.log(2>=1);//greater than and equal
console.log(2<1);//lesser than
console.log(2<=1);//lesser than and equa
console.log(2==1);//equal by value only
console.log(2===1);//equal by both value and datatypes

// == equality check(only value)
// === strict check(both value and datatype)
//if both datatypes are not same
console.log("2">1);//true
console.log("02">1);//true

//mostly avoid these below comparision code it takes confusion where null assigned undefined or 0.
//compare with null value
console.log(null>0);//false
console.log(null==0);//false
console.log(null===0);//false
console.log(null>=0);//true

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false