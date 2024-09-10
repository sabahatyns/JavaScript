let score = 33; //number data type

// two ways to find data type
console.log(typeof score)
console.log(typeof (score))

// in case we dont know exact value like if we re working on backend we may not sure whats exact value
// convert datatype
let ValueInNumber = Number(score) //convert value to score to number, we can using string or anay like that
// if value is not convertable it will give value as NaN - means not a number
console.log(typeof ValueInNumber)
console.log(ValueInNumber)

//  if string is like "55" we caan convert it into number by using above method
// if value is like "55abc" it cant be convert into numbers to so it will give NaN
// if value true(if irst data type is boolean) it will converted to 1 , if false it will be converted to 0


let isLoggedIn = 1;
let isLog = "";
let isLogInString = "Hello";

//conversion to boolean

let inBooleanIsLoggedIn = Boolean(isLoggedIn)
let inBooleanIsLog = Boolean(isLog)
let inBooleanIsString = Boolean(isLogInString)

console.log(inBooleanIsLoggedIn) // it wil give true
console.log(inBooleanIsLog) // it will give false bcz vallue is empty
console.log(inBooleanIsString) // it will give true bcz there is some value 


//prefix and postfix operators
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"