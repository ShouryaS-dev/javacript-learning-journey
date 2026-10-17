let myDate = new Date();
console.log(myDate);
console.log(typeof(myDate));

//several functions of date object
console.log("=====Functions=====");

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString()); 
console.log(myDate.toLocaleString()); // complete date and time
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());

console.log("============");

let createdDate = new Date(2026, 9, 4); //Months start from 0 - 11
console.log(createdDate.toDateString());

let dateAndTime = new Date(2026, 9, 4, 10, 30);
console.log(dateAndTime.toLocaleString());

let newDate = new Date(2026, 9, 4, 15, 5);
console.log(newDate.toLocaleString());

let myCreatdDate = new Date("06-28-2026")
console.log(myCreatdDate.toLocaleString());

console.log("============");

//for comparing values
let currentDate = Date.now(); //this is a timestamp
console.log(currentDate);
console.log(myCreatdDate.getTime());

// there exist several other functions as well - 
// getDate, getDay, gteFullYear, getHours, getMonth, etc

