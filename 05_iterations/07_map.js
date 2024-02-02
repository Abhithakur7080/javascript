const myNums = [1,2, 3, 4, 5,6, 7, 8, 9, 10]

const evenNums = myNums.map((num)=> num%2===0)
//here filter is better than map here this condition
//but map is also most important it can be used for more functions inside this
console.log(evenNums);//[false, true, false, true, false, true, false, true, false, true]
const newNums = myNums
.map((num)=> num*10)//return [10,20,30,40,50,60,70,80,90,100]
.map((num)=>num+1)//return [11,21,31,41,51,61,71,81,91,101]

//here we can use many methods like map, filter, reduce also
console.log(newNums);//[11, 21, 31, 41, 51, 61, 71, 81, 91, 101]