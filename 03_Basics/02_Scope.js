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


//in nested functions child function can access variables from parent function but parent function can not access variables that are declared in child variable
function one() {
    const usrname = "Me"
    function two() {
        console.log(usrname);//it can access username bcz it is a child function and it can access variables that are declared in parent functions
        const website = "this is the variable in child function"
    }
    //console.log(website);// it will give error as it cant access variable from child function
    two()

}
one()

//same scope logic will be applied in if else case

//functiuons can be declraed in two ways like below
//in first method we can cal variable before declaration
one() //it will work
function one(num) {
    return num + 5
}
//or
//the second method below sometime called expression. In this a variable holds function 
//we cannot call it before declaration. 
//two()   //it will give error
const two = function (num) {
    return num + 5
}

//we can call it here 
two() //now it will work