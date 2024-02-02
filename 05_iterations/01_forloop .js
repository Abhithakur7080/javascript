//for loop
for(let i=0; i<10; i++){
    const element = i;
    console.log(element);//0 1 ...9
    if(element===5){
        console.log("5 is best number");//5 is best number
    }
}
// console.log(element); //not accecible outside
console.log("----------------->");

//nested loop
for (let i = 2; i <=20; i++) {
    console.log(`Multiplication Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop: ${j} and Inner Loop: ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

//array access
let array = ["flash", "batman", "superman"]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

//break
for (let index = 1; index <=20; index++) {
    if(index===5){
        console.log(`Detected 5`);
        break; //stop and got to after loop
    }
    console.log(`value of index is ${index}`);
}
// continue
for (let index = 1; index <=20; index++) {
    if(index===5){
        console.log(`Detected 5`);
        continue; //ignore 5
    }
    console.log(`value of index is ${index}`);
}