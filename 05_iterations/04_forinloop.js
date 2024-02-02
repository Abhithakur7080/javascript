//for in loop gives us keys
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
//gives keys
for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`)
}
const programms = ['js', 'html', 'css', 'reactjs', 'nodejs']
//gives keys
for (const key in programms) {
    console.log(`${key}: ${programms[key]}`);
}

//maps -> map is like as a object have some key pair values
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United stated of America')
map.set('FR', 'France')
map.set('IN', 'India')//map is set unique values not set duplicate values

//map is not iterable like this
for (const key in map) {
    console.log(key);
}