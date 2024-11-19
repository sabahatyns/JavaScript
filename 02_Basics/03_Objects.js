// two ways to declare object 
//object literals and as constructor
//sigleton - when we declare object as constructor it is always singleton like object.create

//OBJECT-LITERALS

const mySym = Symbol("mykey")
const user = {
    name: "SABAHAT", // we can access by both methods
    age: 5,
    location: "PAKISTAN",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Sunday"],
    [mySym]: "mykey", // if we want to use symbol in object key , if we dont use bracket its type will be string
    "full name": "sabahat younas" // we cant access it with dot method bcz we specified its string we must use console.log(user["full name"]);
}
//two ways to access object keys
console.log(user.location);// when we use  dot  we dont need to tell it is a string
console.log(user["location"]);

console.log(user["full name"]);
console.log(user[mySym]);


// overwrite object key value
user.name = "FAIZAN"
console.log(user.name); // will print faizan 


// freez object so no one can change
//Object.freeze(user) // now we cant change its value 
// if we will change value of any key it will not show any error but changes will not be made

//add function in object - remember to remove freeze method
user.greetings = function(){
    console.log("Hello JS user");
}
user.greetingsTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
}

console.log(user.greetings());
console.log(user.greetingsTwo());
