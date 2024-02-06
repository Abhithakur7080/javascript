const counter = () => {
  console.log("counter");
};
const changeText = () => {
  document.getElementById("count").innerHTML = "counter and timer";
};
// document.getElementById('count').innerHTML = 'counter and timer'
// const timeoutRef = setTimeout(changeText, 2000);//after 2s print only one time
// document.querySelector('#stop').addEventListener('click', ()=>{
//     clearTimeout(timeoutRef)
//     console.log("STOPPED");
// })

//------------------->
const sayDate = function (str) {
  console.log(str, Date.now());
};
let intervalRef;
document.querySelector("#start").addEventListener("click", () => {
    intervalRef = setInterval(sayDate, 1000, "hii");
});

document.querySelector("#stop").addEventListener("click", () => {
  clearTimeout(intervalRef);
  console.log("STOPPED");
});
