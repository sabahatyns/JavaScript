//for loop

for (let i = 0; i < 6; i++) {
    const element = i;
    if (element == 5) {
        //  console.log("five is best");

    }
    // console.log(element);

}

for (let i = 0; i < 6; i++) {
    console.log("outer loop", i);

    for (let j = 0; j < 5; j++) {
        console.log("inner loop", j, i);

    }
}


//loop on array

const myArray = ["superman", "batman", "rock", ]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}