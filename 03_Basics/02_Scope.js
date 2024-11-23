let d = 55;// this is global scope

if (true) {
    let a = 5;
    const b = 6;//we can only use let and const inside that block
    var c = 66;
    let d = 6;
    console.log("inside block value", d);//value of d inside this block will be 6  but outside will be global value
}

//console.log(a, b, c); // only var will be printed accesible but that should not be, that is why we dont use var anymore
console.log("global scope value", d); 


