
const tinderUser = new Object() // sigleton object - constructor method
const tinderUserTwo = {} // non singleton object
// both are same just one in singleton seccond is not singleton


// nested objects

const UserTwo = {
    name: "Sabahat",
    age: 5,
    logInDays: {
        first: "Monday",
        two: "Tuesday",
        AnotherObject: {
            name: "Faizan Younas",
            age: 5
        }
    }
}

// access nested objects
console.log(UserTwo.logInDays.AnotherObject.name); // return faizan younas
console.log(Object.keys(UserTwo)); //it will add all keys in an array and print
console.log(Object.values(UserTwo));//it will print values in array
console.log(Object.entries(UserTwo));// it will print atrray data in separate arrays for every key value pair
console.log(UserTwo.hasOwnProperty("name"));// check if usertwo has name property

const a = {
    5: "a",
    6: "b"
}
const b = {
    55: "c",
    66: "d"
}

//const c = {a, b} // this will cause issue bcs it willl creted nested object
const c = Object.assign(a, b) // correct way
const d = Object.assign({}, a, b)// most accurate way

//WE CAN USE SPREAD OPERATOR LIKE ARRAYS
const e = { ...a, ...b }
console.log(c);
console.log(d);
console.log(e);


//DESTRUCTURING IN OBJECTS
const user = {
    name: "SABAHAT", // we can access by both methods
    age: 5,
    location: "PAKISTAN",
    isLoggedIn : false,
}

const {location} = user
console.log("location" , location);
// we can also change of key like

const { isLoggedIn : login} = user
console.log("login" , login);



