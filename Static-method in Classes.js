class exampleClass {
    //add anything here its also like a function
    #age// we need to add it here to make it private 
    constructor(firstName, lastName, age) { // constructor is built in method 
        // when we call class only constructor will run other methods below will be added in prototype not in actual class
        this.firstName = firstName,
            this.lastName = lastName,
            this.#age = age
    }

    static hi = "hello" // static property - this property will only be in class not in objects like  useOne and userTwo
    // stati{c block below
    static {
        console.log("hello") // static block will run  even without calling
    }

    getBirthYear() {
        return new Date().getFullYear() - this.#age
    }
    static getFullName() {// also static
        //logic here
        return this.firstName + " " + this.lastName
    }

}
exampleClass.MyName = "Sabahat" // also a  static property


const userOne = new exampleClass("Danial", "Younas", 5,)
const userTwo = new exampleClass("Faizan", "Younas", 6,)
 console.log(userOne)