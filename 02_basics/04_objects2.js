//object singleton
const tinderUser = new Object();
// const tinderUser = {};//both similar
tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isloggedIn = false;
console.log(tinderUser);//{id: '123abc', name: 'sam', isloggedIn: false}

//object literal
const regularUser = {
  email: "abc@gamil.com",
  fullname: {
    //nested objects
    userFullName: {
      userFirstName: "Abhijeet",
      userLastName: "Kumar",
    },
  },
};
console.log(regularUser);//{email: 'abc@gamil.com', fullname: {…}}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}
// const obj3 = {obj1, obj2}//join but have both two objects problem not object value
// const obj3 = Object.assign(obj1, obj2)//syntax-1
// const obj3 = Object.assign({}, obj1, obj2, obj4)//syntax-2 on docs {} as target and obj1, obj2, obj3 as a source
const obj3 = {...obj1, ...obj2, ...obj4}//syntax-3 mostly used
console.log(obj3);//{1: 'a', 2: 'b', 3: 'c', 4: 'd'}

//sometimes data comes from database

const users = [
    {
        id: 1,
        name: "abc"
    },
    {
        id: 2,
        name: "def"
    },
    {
        id: 3,
        name: "ghi"
    },
    {
        id: 4,
        name: "jkl"
    },
    {
        id: 5,
        name: "mno"
    }
]
console.log(tinderUser);
users[1].name
console.log(Object.keys(tinderUser));//['id', 'name', 'isloggedIn']->data types are arrays
console.log(Object.values(tinderUser));//['123abc', 'sam', false]->data types are arrays
console.log(Object.entries(tinderUser));//[ [id: '123abc'], [name: 'sam'], [isloggedIn: false] ]

//if value not exists in object
console.log(tinderUser.hasOwnProperty('isloggedIn'), tinderUser.hasOwnProperty('email'));//true false

const course = {
  name: "Javascript",
  price: "999",
  instructor: "chai aur code"
}
// course.name
// course.price
// course.instructor
//it's not best syntaxual
//let's destructuring
// const {name, instructor, price} = course

// console.table([{key:"name", value: name},{key:"price", value:price}, {key:"instructor", value:instructor}]);
//we can destructure as a custom name also
const {name:n, instructor:i, price:p} = course
//on custom name declare after value always like name:custom_name
console.log(n,i,p);//Javascript chai aur code 999

//JSON format like as objects but not object
// {
//   "name": "abc",
//   "courseName": "javascript",
//   "price": 1999
// }