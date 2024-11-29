//reduce method

const myNums = [1, 2, 3]
const reduceFun = myNums.reduce((acc, curval) => {
    //console.log("acc:", acc, " current value:", curval );
    return acc + curval

}, 0)

console.log(reduceFun);

//smart way
const reduceFunTwo = myNums.reduce((acc, curval) => acc + curval, 0)
console.log(reduceFunTwo);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)// initial value zero
console.log(totalPrice);
