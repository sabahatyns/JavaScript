const currentyear = new Date().getFullYear() - 5
//console.log(new Date().getFullYear())
//console.log(currentyear)

//general function  //This is functional programming example not oop
const ageyear = (age) => {
    return new Date().getFullYear() - age
}
const age = 6;
console.log(ageyear(age))//pass age when calling function // this is also abstraction
console.log(ageyear(5))//pass age when calling function// this is also abstraction

//Encapsulation in OOP //hiding everything in object
//everything will be encapsulated in a object

const user = {
    firstName: "Sabahat",
    lastName: "Younas",
    age: 6,
    ageyearofuser: function () {
        return new Date().getFullYear() - user.age
    }

}
console.log(user.ageyearofuser())


//Abstraction in OOP- it means not showing the  complexity 
console.log(ageyear(5))//pass age when calling function// this is also abstraction
// like this console.log(ageyear(5)) user can just add his age tio know the age year, he dont need to know what ageyear function is 
//this is called abstraction- not showing the complexity for user

//FACTORY FUNCTIONS
// if we want to create two users we need  to write same code again again that is why we use afctory function to prevent this 
function createuser(firstName, lastName, age) {
   const user = {
        firstName: firstName, 
        lastName: lastName,
        age: age,
        ageyearofuser: function () {
            return new Date().getFullYear() - user.age
        }
    }
    return user;
}
//pass parameter when calling function
console.log(createuser("Danial", "Younas", 5))


// if both key and value are same like both firstName parameter is same we can write it once
// like this 
function createuser(firstName, lastName, age) {
    const user = {
         firstName, 
         lastName,
         age,
         ageyearofuser: function () {
            return new Date().getFullYear() - user.age
        }
     }
     return user;
 }
 //pass parameter when calling function
 console.log(createuser("Danial", "Younas", 5,))
 
 const userOne = createuser("Danial", "Younas", 5,)
 console.log (userOne.ageyearofuser())

 //The line ageyearofuser: [Function: ageyearofuser] appears when you print the entire user object because it’s showing that ageyearofuser is a function, rather than executing it to show the result.

//To display the birth year, you need to specifically call userOne.ageyearofuser() as a function.


