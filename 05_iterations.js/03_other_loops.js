//for of loop
//for of loop will not work for objects , for in loop is  used for objects
let array = [1, 2, 3, 4, 5, 6]

for (const num of array) {
    console.log(num);// it will print array elements one by one  
}

//map  //it has unique values bcz it will not have same value again and again
const map = new Map()
map.set('PK'  ,'Pakistan')
map.set('IN'  ,'India')
map.set('UK'  ,'United Kingdom')
map.set('USA'  ,'United States')
map.set('IN'  ,'India')// it will be shown only once as we have already added it now it will not be added again


//console.log(map);


//print map using loop
for (const key of map) {
   // console.log(key); // it will print without showing key and value pair relation to fix this below method is used
    
}

for (const [key , value] of map) {
    console.log(key, ": ", value);// it will print as key value pair 
    //this method will not work for objects keep in mind
}