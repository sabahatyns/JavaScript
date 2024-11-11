//POLYMORPHISM AND THIS KEYWORD
// polymorphism means we create one functionthat can change according to need like we are using it for user one and also for user two or any user we will create 

function birthYearOfUser () {
    //return new Date().getFullYear() - user.age //  it will give error user not found so we need to use this keyword so it can recongnize the age of user one or user two which we need according to what we need
    return new Date().getFullYear() - this.age // it will recongnize if we re calling user one it will use userone's age is we re calling usertwo it will use usertwo age
}

function createuser(firstName, lastName, age) {
    const user = {
         firstName: firstName, 
         lastName: lastName,
         age: age,
         birthYearOfUser,
     }
     return user;
 }

 const userOne = createuser("Danial", "Younas", 5,)
 const userTwo = createuser("Faizan", "Younas", 6,)
console.log(userTwo.birthYearOfUser())// it will give error if we dont use this keyword in birthyearofuser function
// bcz of this keyword in birthyearofuser function it will know which user's age it needs to use according to requirement


console.log (userOne.birthYearOfUser === userTwo.birthYearOfUser) // it will give true bcz birthYearOfUser is saved in memory on one time