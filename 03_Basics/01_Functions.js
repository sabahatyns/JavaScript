function myName() {
    console.log("Sabahat");
    console.log("Younas");

}
// call function
myName()

function addition(numbera, numberb) {// numbers are parameters
    console.log(numbera + numberb);

}
// call function and pass arguments
addition(5, 5)// return ten
addition(5, "b") // both will be treated as string
const result = addition(5, 5)

console.log("result ", result);// it will be undefined bcz fnction is not returning anything

// thats how to do


function additionReturn(numbera, numberb) {// numbers are parameters
    const result = numbera + numberb
    return result
    console.log("hello");// function dont run anything after return value so it will not execute
    //we can also do it with out declarig result vaariable like below
    //  result numbera + numberb

}


//RETURN 
const newResult = additionReturn(5, 5)
console.log("new result ", newResult);// now it will return ten

function userLoggedInMessage(username) {// numbers are parameters
    return `${username} just logged in.`
}

userLoggedInMessage("Sabahat") // it will run function but will not print anything bcz function is returning a value but we re not displaying that value
// so we need to console log like below
console.log(userLoggedInMessage("Sabahat"));// now it print value



// REST OPERATOR - if we dont know how many parameters will come like
function calculateValueOfItemsInCart(...num) {// by using dots which is called rest operator it will return array of all arguments that we will pass when calling this function
    return num
}

console.log(calculateValueOfItemsInCart(55, 56, 555));// we can add as many we want like we dont know hoew many items user will add in cart, it will return array of all 
// if we dont use rest operator and add more arguments then parameters then it will only count first argument


function calculateValueOfItemsInCartExample(value, valueTwo, ...num) {
    return value, valueTwo, num
}
console.log(calculateValueOfItemsInCartExample(55, 56, 555, 66));// in this case first will be value, second will be valueTwo and rest will be in rest operator num


//  pass objects in function below
const user = {
    username: "Sabshat",
    age: 666


}

function passUserObject(anyobject) { //we can name paarmeter whattever we want
    console.log(`The username is ${anyobject.username} and age is ${anyobject.age} `);

}

passUserObject(user)// pass correct object name here
// we can pass direct object too like 
passUserObject({
    username: "Sabshat",
    age: 666

})

//we can pass arrays too same as object
//example

const getSecondValue = [5, 6, 55, 66, 5656]
function getvalueinArray(anyobject) { //we can name paarmeter whattever we want
    return anyobject[1]//retur second value
}

console.log(getvalueinArray(getSecondValue));
console.log(getvalueinArray([5, 6, 55, 66, 5656]));
