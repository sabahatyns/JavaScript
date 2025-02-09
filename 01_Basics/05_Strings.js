//new  way of strings syntax
const name = "Sabahat"; // declare string
const repoCount = 55;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`) // this is called string interpolation method


//another way of declaring strings
const Name = new String('Sabahat')
console.log(Name)

// string is just like object  it has key value pair like below you can check in browser
//below is the result from browser 
// 0 :"S"
// 1:"a"
// 2:"b"
// 3:"a"
// 4:"h"
// 5:"a"
// 6 :"t"
//length: 7
//[[Prototype]]: String
//[[PrimitiveValue]]: "Sabahat"

//heres some string methods
console.log(Name[0])// whats at position zero
console.log(Name.length)// length of the string
console.log(Name.toLocaleUpperCase()) //convert string to uppercase- ofcourse it will not change original value
console.log(Name.charAt(6)) // what character is at position 6
console.log(Name.indexOf("b")) // string mai b kis position pr hai
console.log(Name.substring(0, 5)) // it will not incluse the  fifth element, we cant give negative value
console.log(Name.slice(-5, 6)) // we can give slice negative value to reverse 
//Correct, negative indices do not have a -0. more
//ask chaatgpt for 

const newString = "    YOUNAS    "  
console.log(newString)
console.log(newString.trim()) // remove spaces
console.log(newString.trimStart()) // remove spaces froom start
console.log(newString.trimEnd()) // remove spaces froom end

const url = "https://www.fiverr.com%user%"
console.log(url.replace("%", "-")) // replace % with -
console.log(url.includes("fiverr")) // check if url has fiverr word. it will return true or false


const anotherString = "Sabahat-Younas"
console.log(anotherString.split("-")) // split where - dashes are
