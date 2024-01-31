function one() {
  const username = "abhijeet";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  two(); //abhijeet
  // console.log(website);//not defined everytime it is in inner block
  // two()//error on previous console line so nothing print
}
one();

if (true) {
  const username = "abhijeet";
  if (username === "abhijeet") {
    const website = "youtube";
    console.log(username, website);
  }
//   console.log(website);//website is not defined
}
// console.log(username);//username is not defined

/*********Interesting question*************/
addOne(5);// it can be accessible
function addOne(num){
    return num+1;
}
console.log(addOne(5));//6

// addTwo(5)//Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(5));//7