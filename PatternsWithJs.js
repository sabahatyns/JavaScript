function firstPatt() {
    for (let i = 0; i < 4; i++) {
        let row = "";
        for (let j = 0; j < 4; j++) {
            row += "* "
        }
        console.log(row)
    }
    return
}
// firstPatt() 


// second pattern
function secondPatt() {
    for (let i = 0; i < 6; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += "* "
        }
        console.log(row)
    }
    return
}
secondPatt() 
