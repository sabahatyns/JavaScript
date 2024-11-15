const user ={
    firstName :'Sabahat',
    lastName : "Younas",
    get getFullName () { // getter // we can access it as property by using get
        return `${this.firstName}  ${this.lastName}`
    }
}

console.log(user.getFullName) 