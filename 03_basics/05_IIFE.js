//IIFE -> Immediately Invoked Function Expressions

//sometimes data pollute from global scope this time we use IIFE

// function func(){
//     console.log(`DB CONNECTED`);
// }
// func()
//syntax -> (--function expression--)(--function execution--);
(function func(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();//we have to use semicolon ';' to end of the function execution sometimes IDE not add

((name)=>{
    //unnamed IIFE
    console.log(`DB Connected two ${name}`);
})("Abhijeet");