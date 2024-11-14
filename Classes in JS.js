// classes in js -private and public classes
class exampleClass {
    //add anything here its also like a function
    #age// we need to add it here to make it private 
    constructor(firstName, lastName, age) { // constructor is built in method 
        // when we call class only constructor will run other methods below will be added in prototype not in actual class
        this.firstName = firstName,
            this.lastName = lastName,
            this.#age = age
    }

    hi = "hello" // it will be same for both users , 
    #hi = "hello" // no need to add separate bcz it is already outside of  constructor 

    // methods below ill be automatically added in prototype of class not in actual class 
    // we dont need to do it separately by using .prototype method like we need to do in function
    // it will add automaticaaly thats why we use classs
    getBirthYear() {
        return new Date().getFullYear() - this.#age
    }
    getFullName() {
        //logic here
        return this.firstName + " " + this.lastName
    }

}


const userOne = new exampleClass("Danial", "Younas", 5,)
const userTwo = new exampleClass("Faizan", "Younas", 6,)
//console.log(typeof exampleClass) // it will return function because class in also just like a function
// we cannot call class without using new keyword
console.log(userOne.getBirthYear())// this is in prototype
console.log(userOne , userTwo)// this is in prototype

//console.log(Object.keys(exampleClass.prototype));// check methods in prototype of class exampleClass
//console.dir(exampleClass.prototype);// same check methods in porototype with details

