const marvel_heros = ["thor", "spiderman"]
const dc_heros = ["batman", "flash", "superman",]
// in array values are changed in original value
// in push it will be added as separate array in first array see in output but in concatt it return a complete new array after adding both
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

// in concat it will return new array after addition
// thts why we neeed to hold it in a new variable

const afterConcat = marvel_heros.concat(dc_heros)
console.log(afterConcat); // it will show in single array

//SPREAD OPERATOR - it add arrays like concat but it is used mostly

const spreadArr = [...dc_heros, ...marvel_heros]
console.log(spreadArr);

const array = [1, 3, 5, [6, 7, 8, [1, 3, 5]], 5, 6, 7, 8,]
// if we want to make it a simple array by changing nested arrays to a single array we can use flat
const newArrayAfterFlat = array.flat(Infinity);
console.log(newArrayAfterFlat);


console.log(Array.isArray("SABAHAT")); /// check if it is an array
console.log(Array.from("SABAHAT")); // make array from it
console.log(Array.from({ name: 'SABAHAT' })); // WILL return empty array bcs we have to tell this is object 

const valueone = 55;
const valuetwo = 56;
const valuethree = 5;

console.log(Array.of(valueone, valuethree, valuetwo)); // make array

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
    console.log(num * 2); // Prints: 2, 4, 6, 8, 10
});


// FILTER METHOD
// Keep only even numbers
const evens = numbers.filter((num) => num % 2 === 0);

console.log(evens); // [2, 4, 6]
const fruits = ["apple", "banana", "cherry", "date"];

// Keep only fruits with more than 5 characters
// const longFruits = fruits.filter((fruit) => fruit.length > 5);  // ['banana', 'cherry']
const longFruits = fruits.filter((fruit) => {
    return fruit.startsWith("a") // return what  start with a
})
console.log(longFruits);



// MAP METHOD
// see diff between for each and map , ask chatgpt

// Double each number
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

const number = [10, 20, 30];
// Add the index to each number
const result = number.map((num, index) => num + index);

console.log(result); // [10, 21, 32]


// REDUCE METHOD
const numberReduce = [1, 2, 3, 4, 5];

const sum = numberReduce.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
//Each element is added to the accumulator.
console.log(sum); // 15

// another example of reduce
const example = ["Hello", "World", "JAVASCRIPT"]

const resultAfterReduce = example.reduce((accumulator, currentValue) => {
    return accumulator + " " + currentValue
})
console.log(resultAfterReduce); // Hello World JAVASCRIPT
