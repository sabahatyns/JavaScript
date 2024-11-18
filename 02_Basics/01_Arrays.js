// ARRAY ARE NON-PRIMITIVE DATA TYPE
// different ways  to declare arrays

const myArr = [1, 3, 5, 6, 7, 8,]
const myHeros = ["Tokyo", "Berlin", "Moscow"]
const newArr = new Array(7, 3, 1, 9)
// read about deep copy and shallow copy
// shallow copy share same reference - mean whatever we will change it willbe changed in original value
// deep copy dont share same reference 
// array are resizeable
// console.log(myArr[5]);
// console.log(typeof newArr);

// Array methods
console.log(myArr.push(9)); // will return new length of array after adding new nine 
//The primary goal of the push() method is to modify the array by adding new elements at the end. Returning the new length is a convenient way for developers to know the updated size of the array without having to call array.length separately.

// grt full array after push
myArr.push(9)
myArr.pop() // will remove last element of array
myArr.unshift(6) // will add at start of array but then we have to change position of every element in that array
myArr.shift() // will remove first element from start of array
console.log(myArr);


// we can ask question like below
console.log(myArr.includes(6));// boolean - willl return true or false
console.log(myArr.indexOf(6));

const newArray = myArr.join() // it will change type of array to strig
console.log(newArray);
console.log(typeof newArray); // string


//slice , splice
console.log("A" , myArr); // original array

const arraySlice = myArr.slice( 1, 3,) // it will not include third element
console.log(arraySlice);
console.log("B" , myArr); // after slice it will return complete array it will not be changed
// in slice it just show that part of array


const arraySplice = myArr.splice( 1, 3,)
console.log(arraySplice);// it will include third element when showing console log, it will also remove that part of array from original array
console.log("C" , myArr); // after splice jo  bki array hogi wo show hogi


