//Imediately invoked function expressions

//iife means function should execute automaticalaly imediately
// to prevent global scope pollution we use iife
//below is the iife function, wrap function in paranthesis and also use paranthesis next to it
(function one(params) {//named iife
    console.log("Hello");
})(); // must use semicolon
//now we dont need to call this function separately


//iife in arrow functions
( ()=>{
    console.log("iife in arrow");
    
})();

( (name)=>{
    console.log(`iife in arrow ${name}`);
    
})("hitesh");