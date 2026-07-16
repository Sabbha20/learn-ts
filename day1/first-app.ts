let usrname: string = "Sabbha";
let age: number = 31;
let mybool: boolean = true;

console.log(`My name is ${usrname} and I am ${age} years old. It is ${mybool} that I am learning TypeScript.`);

// using dual type in single variable
let usrID: string | number = "User 1001";
console.log(`User ID is "${usrID}"`);

// Custom type for user ID
type UserID = string | number;
let userId: UserID = "User 1001";
console.log(`User ID is "${userId}"`);

// changing the value of usrID to a number
usrID = 1001;
console.log(`User ID is now "${usrID}"`);

// Object type
let user: {
    name: string;
    age: number;
    isValid: boolean;
    id: string | number;
};

user = {
    name: "Sabbha",
    age: 31,
    isValid: true,
    id: "User 1001"
};

console.log(`User details: Name - ${user.name}, Age - ${user.age}, Valid - ${user.isValid}, ID - ${user.id}`);

// Custom types
type User = {
    name: string;
    age: number;
    isValid: boolean;
    id: UserID;
};

let newUser: User;
newUser = {
    name: "Sabbha",
    age: 31,
    isValid: true,
    id: 1001
};

console.log(`New User details: Name - ${newUser.name}, Age - ${newUser.age}, Valid - ${newUser.isValid}, ID - ${newUser.id}`);

// Arrays

let hobbies: string[];

let fruits: Array<string>; // Another way to declare an array of strings

/**
 * Similarly we can have arrays of numbers, booleans, or even objects. For example:
 * 
 * let numbers: number[] = [1, 2, 3, 4, 5];
 * let flags: boolean[] = [true, false, true];
 * let users: { name: string; age: number }[] = [
 *     { name: "Alice", age: 25 },
 *     { name: "Bob", age: 30 }
 * ];
 */

hobbies = ["Reading", "Traveling", "Cooking"];
fruits = ["Apple", "Banana", "Cherry"];

console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Fruits: ${fruits.join(", ")}`);