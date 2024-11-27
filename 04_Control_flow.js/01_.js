// = is used to assign value
//== is used to check 
//=== is used for  strict check ike data types too

// >, <, >=, <=, 

const balance = 555
if (balance > 55) {
    console.log("balance is greater");

} else {
    console.log("balance is lower");

}

//use multiple conditions

if (balance > 55) {
    console.log("balance is greater");

} else if (balance > 556){
    console.log("balance is greater than 556");

} else{
    console.log("balance is lower");
    
}

const userLoggedIn = true;
const debitCard = true;
const userLoggedInWithEmail = true;
const userLoggedInWithGoogle = true;

if (userLoggedIn && debitCard) {
    console.log("user logged in");
    
}
if (userLoggedInWithEmail || userLoggedInWithGoogle) {
    console.log("granted");

}