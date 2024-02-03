//ADD
/*
function addLanguage(language){
    const list = document.createElement('li')
    //here change we have to traverse all content
    list.innerHTML = `${language}`
    document.querySelector('.language').appendChild(list)
}
addLanguage("Python")
addLanguage("Java")
addLanguage("HTML")
addLanguage("CSS")
addLanguage("Typescript")
*/

//optimized approach
function addLanguage(language){
    const list = document.createElement('li')
    //here change we target on a node and add this text
    list.appendChild(document.createTextNode(language))
    document.querySelector('.language').appendChild(list)
}
addLanguage("Python")
addLanguage("Java")
addLanguage("HTML")
addLanguage("CSS")
addLanguage("Typescript")


//EDIT
const secondLanguage = document.querySelector("li:nth-child(2)")
//not optimized
// secondLanguage.innerHTML = "React"

//new method
const newList = document.createElement('li')
newList.textContent = "React"
secondLanguage.replaceWith(newList)

//last method of edit
const firstLanguage = document.querySelector("li:first-child")
firstLanguage.outerHTML = '<li>NodeJs</li>'

//REMOVE
const lastLanguage = document.querySelector('li:last-child');
lastLanguage.remove()