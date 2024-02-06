// document.getElementById('photo1').onclick = function(){
//     alert("Photo 1 clicked")
// }
// but this types has less features and less propagation
//-------------------------->
//-->addEventListener('click', function(){}, false)
// document.getElementById('images').addEventListener('click', function(){
//     alert('images click')
// }, false)
// document.getElementById('photo1').addEventListener('click', function(){
//     alert('photo 1 click')
// }, false)
// alert 1st 'photo 1 click' then 'images click'
// document.getElementById('images').addEventListener('click', function(){
//     alert('images click')

// }, true)
// document.getElementById('photo1').addEventListener('click', function(){
//     alert('photo 1 click')
// }, true)// alert 1st 'images click' then 'photo 1 click'

// document.getElementById('photo1').addEventListener('click', function(e){
//     console.log("Photo 1 clicked");
//     e.stopPropagation()
// }, false)
// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google clicked");
// }, false)

//attachEvent() previously work but currently mainly we haven't use

document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    const list = e.target.parentNode;
    list.remove();
  }

  // list.parentNode.removeChild(list)
});
