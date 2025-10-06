const user ={
    username :"Sabahat",
    age: 555,
    wellcomemessage : function() {
        console.log(` ${this.username} welcom to website`);//this keyword refers to the current context
        console.log(this);
        
    }
}

user.wellcomemessage()//it will sow username sabaht
user.username="Hitesh" //here username will be changed 
user.wellcomemessage()// here username will be hitesh as this will refer to current context

//console.log(this);// here this will refer empty
//in browser global object is window so in browser this will refer window when we console log just this not inside any object 

function chaii(params) {
    const username = "hello"
    //console.log(this.username); // we cant use this keyword in function like this
    console.log(this);//it will show so many things

}
//chaii()

// ====================================Arrow Function=======================================================//
// const addTwo =  (num, numTwo) => {
//     return num + numTwo
//     // console.log(this);//it will show empty object

// }

//implicit return method
// const addThree =  (num, numTwo) => num + numTwo
// const add =  (num, numTwo) => (num + numTwo)//we can use parathesis too

(function newArrow (){
    console.log("hello arrow");
})();

    
