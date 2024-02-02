const myNums = [1,2, 3, 4, 5,6, 7, 8, 9, 10]

const evenNums = myNums.filter((num)=> num%2===0)
const oddNums = myNums.filter((num)=> num%2!==0)
console.log(evenNums);//[2, 4, 6, 8, 10]
console.log(oddNums);//[1, 3, 5, 7, 9]

// using forEach method
const newNums = []
myNums.forEach((num)=>{
    if(num%2===0){
        newNums.push(num)
    }
})
console.log(newNums);//[2, 4, 6, 8, 10]