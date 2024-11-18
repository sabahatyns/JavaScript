const myDate = new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
// we can customize it more like below
console.log(myDate.toLocaleString('default', {
    weekday: "long",
    month: "2-digit",
    hour: "numeric",
}));
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);// its  an object bcs we used new keyword otherwise it will show string , we need to use new keyword to get date methods
console.log(myDate.getMonth());// give month // moth start from zero
console.log(myDate.getMonth() + 1);//  we can do that to avoid confusion. now it will start from 1
console.log(myDate.getHours())
console.log(myDate.getDay())

//let myCreatedDate = new Date(2024, 0, 24) // in javascript months start from zero
let myCreatedDate = new Date("2024-01-24") // in this case 01 will be january
console.log(myCreatedDate.toLocaleDateString());

let myCreatedDateAndTime = new Date(2024, 0, 24, 6, 5) // 5 and 6 will be time
console.log(myCreatedDateAndTime.toLocaleString());


// time stamp
let myStamp = Date.now(); // Get the current timestamp
console.log(myStamp); // Outputs current time in milliseconds (e.g., 1697666978423)

let myDateStamp = new Date("2024-01-24"); // Creates a Date object for January 24, 2024
console.log(myDateStamp.getTime()); // Outputs the timestamp for "2024-01-24T00:00:00Z"


console.log(Date.now()); // it will give in miliseconds
console.log(Date.now() / 1000); // in seconds but it can have decimal value
console.log(Math.floor((Date.now() / 1000)));// round off to last value
