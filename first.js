console.log("Hello World!");
const company = "abc";
let headManager = "Atul";
let numberOfEmployee = 100;
let headMail = "abc123@gmail.com";
let headPass = 121212;

headPass = 2525;

//company = "xyz" will throw error
/*
var abc = "xyz" is also valid but dont use
    cuz of issue in block and function scope
abc = "xyz" is also valud but bad practice
*/

console.log(company);
console.log(headManager);
//new lines

console.log(company, headManager, headMail, numberOfEmployee, headPass); //continuously after space
console.table([company, headMail, headPass]) //Table format

