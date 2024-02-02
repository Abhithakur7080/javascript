//for of loop gives us values
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

//gives values
for(const num of arr){
    console.log(num);
}

const greeting = "hello world"
for (const greet of greeting) {
    console.log(`each char is ${greet}`);
}

//maps -> map is like as a object have some key pair values
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United stated of America')
map.set('FR', 'France')
map.set('IN', 'India')//map is set unique values not set duplicate values
console.log(map);//{'IN' => 'India', 'USA' => 'United stated of America', 'FR' => 'France'}

for (const [key, value] of map) {
    console.log(key, value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}
// myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, value);
// }