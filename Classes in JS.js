// create class
class exampleClass {
//add anything here its also like a function
}
console.log(typeof exampleClass) // it will return function because class in also just like a function
// we cannot call class without using new keyword
console.log(new exampleClass())
exampleClass.prototype.getBirthYear = function () {
    return new Date().getFullYear() - this.age
}
console.log(Object.keys(exampleClass.prototype));// check methods in prototype of class exampleClass
console.dir(exampleClass.prototype);// same check methods in porototype with details
