function init() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

function outerfunc(){
    let username = "abc";
    // console.log(secret);//secret is not defined
    function innerfunc1(){
        let secret = "my123"
        console.log("inner1",username);
    }
    function innerfunc2(){
        console.log("inner2",username);
        // console.log(secret);//secret is not defined
    }
    innerfunc1()
    innerfunc2()
}
outerfunc()
// console.log("outer", username);//username is not defined