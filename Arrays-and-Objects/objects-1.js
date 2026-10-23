const mySym = Symbol("UserID")

const User = {
    name: "Shourya",
    isLoggedIn: true,
    age: 18,
    mail: "abc123@gmail.com",
    workingDays: ["Monday", "Wednesday", "Friday"],
    "FullName": "Shourya Sinha", //Cant be accessed with User."FullName"
    [mySym]: "Key1", //'[]' are essential for 
}

console.log(User.name);
console.log(User.isLoggedIn);
console.log(User.workingDays);
console.log(User["age"]);
console.log([mySym]);
console.log(User["FullName"]);

User.age = 20;
// Object.freeze(User); --> will prevent from adding the greeting function below

User.age = 25;

// console.log(User.age); // --> Does nothing (No error also)

User.greeting1 = function()
{
    console.log(`Hello ${this.name}`);
}
User.greeting2 = function()
{
    console.log("Hello");
    
}


console.log(User.greeting1());
console.log(User.greeting2());
