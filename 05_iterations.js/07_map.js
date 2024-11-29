//map method

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const methods = myNums.map((item) => item + 5)
//console.log(methods);

//chaining

const chaining = myNums.map((item) => item + 55).map((num) => num / 5).filter((item) => item > 5)


console.log(chaining);

