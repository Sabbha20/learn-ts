let usrname: string = "Sabbha";
let age: number = 31;
let mybool: boolean = true;

console.log(`My name is ${usrname} and I am ${age} years old. It is ${mybool} that I am learning TypeScript.`);

// using dual type in single variable
let usrID: string | number = "User 1001";
console.log(`User ID is "${usrID}"`);

// changing the value of usrID to a number
usrID = 1001;
console.log(`User ID is now "${usrID}"`);