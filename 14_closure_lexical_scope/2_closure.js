function makefunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName
}
const myFunc = makefunc()

//if i have many buttons then 
// document.getElementById('orange').onclick = function(){
//     document.body.style.backgroundColor = `orange`
// }
// document.getElementById('green').onclick = function(){
//     document.body.style.backgroundColor = `green`
// }

function clickHandler(color){
    //it will we direct execute
    // document.body.style.backgroundColor = `${color}`

    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}
document.getElementById('orange').onclick = clickHandler('orange')
document.getElementById('green').onclick = clickHandler('green')