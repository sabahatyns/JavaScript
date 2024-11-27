//falsy values
//false, 0, -0, Bigint 0n, Nan, "", undefined, null


//truthy values
//All values other than falsy values are assumed as truthy values

//EXCEPTIUIONAL CASES 
//if zero is in string "0" like this , it is truthy value bcz it is in string
// " " truthy value bcz of space
// "false" truthy value bcz it is a string
// [] truthy value
//{} truthy value
// function () {} empty function is also a truthy value

const arrayExample = []

if (arrayExample.length === 0) {
    console.log("array is empty");

}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty");

}


//null coalescing operator ?? for null and undefined

let value;
//value = 5 ?? 6; // value will be 5
value = null ?? 6 // value wil be 6
//this operator check if the value is null it will check if it is safe 

console.log(value);


//ternary operator
//condition true ? false

const price = 5;
price <= 5 ? console.log("true") : console.log("false");

