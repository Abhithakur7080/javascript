const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
console.log(parent.children[1]);//<div class="day" style="color: orange;">Tuesday</div>
console.log(parent.children[1].innerHTML);//Tuesday

console.log("---------------------------");
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}
console.log("---------------------------");

parent.children[1].style.color = 'orange';
console.log(parent.firstElementChild);//<div class="day">Monday</div>
console.log(parent.lastElementChild);//<div class="day">Thursday</div>

const dayOne = document.querySelector('.day')
console.log(dayOne);//<div class="day">Monday</div>
console.log(dayOne.parentElement);
/*
<div class="parent">
<div class="day">Monday</div>
<div class="day" style="color: orange;">Tuesday</div>
<div class="day">Wednesday</div>
<div class="day">Thursday</div>
</div>
*/
console.log(dayOne.nextElementSibling);//<div class="day" style="color: orange;">Tuesday</div>

console.log("NODES: ", parent.childNodes);//9->0:text, 1:div.day, 2:text, 3:div.day, 4:text, 5:div.day, 6:text, 7:div.day, 8:text

//node count all these breakline, comments and anything so it count all these things

const div = document.createElement('div')
div.className = 'newElem'
div.id = Math.round(Math.random()*10+1)
//method-1
// div.innerText = "new element"
div.setAttribute('title', 'new Element')
div.style.backgroundColor = 'green'
div.style.padding = '12px'
console.log(div);
dayOne.appendChild(div)
console.log(dayOne);

//method-2
const addText = document.createTextNode("new Element")
div.appendChild(addText)