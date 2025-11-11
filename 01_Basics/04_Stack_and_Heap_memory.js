//ALL PRIMITIVE DATA TYPES GOES IN STACK MEMORY AND NON-PRIMITIVE DATA TYPES GOES IN HEAP

// STACK memory
//when data is stored in stack memory, and then we change its value then the changes are made in copy of data not in the original data
//Heap memory is the opposite of the stack memory

let hello = "MyName";

let hi = hello; // it will have a copy of hello variable as value of hi
hi = "Sabahat"// now value of hi is changed but value of hello is still MyName
console.log(hello)
console.log(hi)


// in HEAP memory it does not give the copy of value instaed it gives the reference of priginal value
// so when we change anything it will be changed in the original value
//example of heap memory
const userOne = {
    email: "abcgjhf.gmail.com",
    password: 'abcdef',
}
const userTwo = userOne // reference of  userone
// change email like
userTwo.email = "sabahatyounasgmail.com" // email will be changed in original value of userone
console.log(userOne) // email will be changed for  both users
console.log(userTwo)

