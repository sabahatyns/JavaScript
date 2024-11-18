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
console.log(Array.from({name :  'SABAHAT'})); // WILL return empty array bcs we have to tell this is object 

const valueone = 55;
const valuetwo = 56;
const valuethree = 5;

console.log(Array.of(valueone, valuethree , valuetwo)); // make array
