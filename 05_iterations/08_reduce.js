const myNums = [1,2, 3, 4, 5,6, 7, 8, 9, 10]

const initialValue = 0
// const myTotal = myNums.reduce(function(accumulator, currentValue){
//     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
//     return accumulator + currentValue
// }, initialValue)

//shortcut
const myTotal = myNums.reduce((acc, current)=>acc+current, 0)
console.log(myTotal);//55

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "reactjs course",
        price: 1999
    },
    {
        itemName: "html course",
        price: 499
    },
    {
        itemName: "css course",
        price: 999
    },
    {
        itemName: "nodejs course",
        price: 2499
    }
]
const totalPrice = shoppingCart.reduce((acc, item)=>acc+item.price,0)
console.log(totalPrice);//8995