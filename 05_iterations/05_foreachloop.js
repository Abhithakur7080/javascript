//for each loop is higher order loop
const coding = ["js", "html", "css", "reactjs", "nodejs"];

// coding.forEach(course => {
//     console.log(course);
// });

function printCourse(course) {
  console.log(course);
}
coding.forEach(printCourse);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
//array with objects
const myCoding = [
  {
    languageName: "java",
    languageFileName: ".java",
  },
  {
    languageName: "javascript",
    languageFileName: ".js",
  },
  {
    languageName: "python",
    languageFileName: ".py",
  }
];

myCoding.forEach((item)=>{
    console.log(item.languageName, item.languageFileName);
})

const coding2 = ["js", "html", "css", "reactjs", "nodejs"];

const values = coding2.forEach((item)=>{
    console.log(item);
    // return item//again undefined
})
//for each haven't return any values so it will undefined
console.log(values);//undefined