//for loop

for (let i = 0; i < 6; i++) {
    const element = i;
    if (element == 5) {
        //  console.log("five is best");

    }
    // console.log(element);

}

for (let i = 0; i < 6; i++) {
   // console.log("outer loop", i);

    for (let j = 0; j < 5; j++) {
      //  console.log("inner loop", j, i);

    }
}


//loop on array

const myArray = ["superman", "batman", "rock", ]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


//keywords
//break and continue

for (let index = 0; index < 66; index++) {

    if (index == 5) {
        console.log("detected 5");
        break; //it will stop executing this block of code when 5 is detected
        
    }
    console.log("value of i is: ", index);
    
}

//use of continue

for (let index = 0; index < 66; index++) {

    if (index == 5) {
        console.log("detected 5");
        continue // it wil not run below code when value is 5 but starts runing from 6 again
    }
    console.log("value of i is: ", index);
    
}