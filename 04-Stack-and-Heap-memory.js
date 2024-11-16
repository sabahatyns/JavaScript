// stack memory
//when data is stored in stack memory, and then we change its value then the changes are made in copy of data nnot in the original data
//Heap memory is the opposite of the stack memorys

let hello =  "MyName";

let hi = hello; // it will have a copy of hello variable as value
hi = "Sabahat"// now value of hi is changed but value of hello is still MyName
console.log(hello)
console.log(hi)