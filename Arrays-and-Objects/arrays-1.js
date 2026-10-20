let arr = [10, 20, 30, 40];
const names = ["Shourya", "Abhinav", "Nakul"];
const extra = new Array("apple", 5, 20, "banana", [1, 2, 3]); //() with 'new'

console.log(arr[2]);
console.log(names);
console.log(extra[0][1], extra[2], extra.at(-1)[2]);

arr.push(100, 200, 300);
arr.pop()
console.log(arr);

arr.unshift(1, 2);
console.log(arr);
arr.shift();
console.log(arr);

arr.shift()

console.log(extra.includes(5));
console.log(extra.includes(10));
console.log(names.includes("Shourya"));

console.log(arr.indexOf(100), arr.indexOf(500));

console.log("===========");

const myArray = arr.join();
console.log(arr, typeof(arr));
console.log(myArray, typeof(myArray));

//unshift adds element at 0th index, pushing every element furthur by 1 place
//shift removes 1 element at 0th index, concatinating the array

console.log("slice and splice");

console.log(arr.slice(1, 4));
console.log(arr);

console.log(arr.splice(1, 4));
console.log(arr);

//splice includes the last index, unlike slice, and also modifies the original array
