const user = {
    //firstName: 'Sabahat',
    //lastName: "Younas",
    get getFullName() { // getter // we can access this function as property by using get
        return `${this.firstName}  ${this.lastName}`
    },
    set fullName(value) { // Setter /// we can set first and lastnemw automatically with setter we dont need to add separately
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName,
        this.lastName = lastName
    }
}

console.log(user.fullName = "SABAHAT YOUNAS" , user) 