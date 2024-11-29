//for in loop for objects
// for in can work for array too but not for map

const myObject ={
    js: "javascript",
    cpp: "C++",
    swift: "swift",
    rb: "ruby",
}

for (const key in myObject) {
    //console.log(key); //it wil print keys only not values
   // console.log(myObject[key]); // it will print values for above keys
    console.log(key, "is for ", myObject[key]);
    
    
}