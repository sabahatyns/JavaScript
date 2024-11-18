const Num = 55; // js will treat it as nuber automatically
console.log(Num)

const number = new Number(666.6666666666)// we can specify too
console.log(number)

// methods in number
console.log(number.toString()) // it will convert it to string
console.log(number.toFixed(3)) // decimal k bad kitny dijit aye gy pass that value
console.log(number.toPrecision(3)) // kitny  total digit show krwany including after point and before point


const hundreds = 1000000000000
console.log(hundreds.toLocaleString("en-PK")) // it will add commas so we can esaily count zeros


const example = Number.MAX_VALUE //  built in properties max value, min value etc
const NumTwo = Number.MIN_VALUE
const NumThree = Number.MAX_SAFE_INTEGER
const NumFour = Number.EPSILON

console.log(NumFour)

//======================================Maths========================================//


// Math is a built-in object in javascript
console.log(Math)

console.log(Math.abs(-5)) // it will change negative value to positive
console.log(Math.round(5.55)) // round off
console.log(Math.ceil(5.04)) // ceil mai agr 5 sy thora b zada hoga to 6 hojye ga
console.log(Math.floor(5.04)) // yh kam wali value hi ly ga mtlb 5 hi ly ga agr 5.4 ho tb b or 5.666 ho tb  b untill k yh 6 ho
console.log(Math.sqrt(55)) // it will give that value which we can square to get 55
console.log(Math.min(5,6,66,5))// minimum value

// MOST IMPORTANT

console.log(Math.random()) // value will always be random between zero and one
console.log(Math.random()*10 ) // multiply that  random value to ten{ value will be btwen zero to ten}
console.log((Math.random()*10) + 1) // value will be atleast one
console.log(Math.floor(Math.random()*10) + 1) // kam wali value mai round off krdy ga floor

// if you want to define min and max values
const min = 5;
const max =10

console.log(Math.floor(Math.random() * (max - min + 1) + min)) // min add krny sy wo minimum value ya us sy upr hi dy ga har br
