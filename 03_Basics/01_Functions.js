function myName() {
    console.log("Sabahat");
    console.log("Younas");

}
// call function
myName()

function addition(numbera, numberb) {// numbers are parameters
    console.log(numbera + numberb);

}
// call function and pass arguments
addition(5, 5)// return ten
addition(5, "b") // both will be treated as string
const result = addition(5, 5)

console.log("result " , result);// it will be undefined bcz fnction is not returning anything

// thats how to do


function additionReturn(numbera, numberb) {// numbers are parameters
  const result= numbera + numberb
  return result
  console.log("hello");// function dont run anything after return value so it will not execute
  //we can also do it with out declarig result vaariable like below
  //  result numbera + numberb
  
}


//RETURN 
const newResult = additionReturn(5, 5)
console.log("new result " , newResult);// now it will return ten

function userLoggedInMessage(username) {// numbers are parameters
    return `${username} just logged in.`
}

userLoggedInMessage("Sabahat") // it will run function but will not print anything bcz function is returning a value but we re not displaying that value
// so we need to console log like below
console.log(userLoggedInMessage("Sabahat"));// now it print value
