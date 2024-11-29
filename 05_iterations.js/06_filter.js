//filter method
//it can return the value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNums.filter((item) => item > 5) // we are not using {} in arrow function, we can use too but for that we cant access value outside that scope/block . we need to return that value first like below

const newAnotherNum = myNums.filter((item) => {
  return  item > 5 // we need to return here bcz now we have defined scope
})
//console.log(newAnotherNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const userBooks = books.filter((item) => item.genre === "History")
  //console.log(userBooks);
  

const userBooksTwo = books.filter((item) => { return item.publish >= 2000 || item.genre === 'History' })
console.log(userBooksTwo);
