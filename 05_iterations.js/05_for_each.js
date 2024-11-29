const coding = ["cpp", "js", "java", "rb", "swift"]

coding.forEach(function (item) {
    //console.log(item);//will print each item

})

//another way , use arrow function

coding.forEach((item , index, arr) => {
    console.log(item, index, arr);//show item , its index and its access to complete array

})

//another way , declare function separately like below

function print(item) {
   // console.log(item);

}

//coding.forEach(print)// pass above function


//multiple objects in single array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    //console.log(item.languageName);
} )


//for each method does not return anything