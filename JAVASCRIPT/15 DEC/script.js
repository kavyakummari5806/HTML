console.log("Objects | Arrays");

var users = ["Iron Man", "Spider Man", "Wanda", "Vision", "Thanos"];

/*
  Indexing : Starts from 0 goes till n-1
*/

console.log(users);
console.log(users[2]);
console.log(users.length);

users[5] = "Captain America";
users[6] = "Captain Marvel";

// users[users.length] = "Hulk";
// users[10] = "Hulk"; // WRONG WAY OF ADDING NEW ITEMS

console.log(users);

// push() : Add an item at the end of the array
users.push("Hulk");
users.push("Ant Man");
console.log(users);
console.log("-------------------------");

// pop() : Removes an element from the end of the array
users.pop();
users.pop();
users.pop();
console.log(users);
console.log("--------------------------");

// unshift() : Adds the item at the starting of the array
users.unshift("Doctor Strange");
console.log(users);
console.log("--------------------------");

// shift() : Removes the item from the starting of the array
users.shift();
console.log(users);
console.log("--------------------------");

console.log(users);
console.log("--------------------------");

// splice(staringIndex,deleteCount,...newItems)
users.splice(1,2); // Deletion of item
console.log(users);
console.log("--------------------------");

users.splice(1, 0, "Naniga"); // Add an item at specific position
console.log(users);
console.log("--------------------------");

users.splice(3, 1, "Groot"); // Replace an item at specific position
console.log(users);
console.log("--------------------------");

users.splice(1, 2, "Nebula", "Ghamora",); // Replace multiple items at once
console.log(users);
console.log("--------------------------");

users.splice(2, 0, "War Machine", "Black Widow");
console.log(users);
console.log("--------------------------");

users.splice(2, 1, "Quail", "Rocket", "Thor", "Yondu");
console.log(users);
console.log("--------------------------");

// Mutation : Changing of an item
// All the above methods mutates the array

var temp = users.slice(2, 5);
console.log(temp);
// console.log(users);
console.log("--------------------------");

// slice method does not mutates the array

// Join 2 arrays

var users2 = ["Bat Man", "Aqua Man", "Joker"];
var temp2 = users.concat(users2);
console.log(temp2);
console.log("--------------------------");

// sorting an array : Arranging the array in a particular fashion or order.
 
temp2.sort();
console.log(temp2);
console.log("--------------------------");

temp2.reverse();
console.log(temp2);
console.log("--------------------------");

var hasThor = temp2.includes("abcd");
console.log(hasThor);
console.log("--------------------------");

var hasThor2 = temp2.includes("Captain America");
console.log(hasThor2);
console.log("--------------------------");

var idx = temp2.indexOf("Gallactus");
console.log(idx);
console.log("--------------------------");

var idx2 = temp2.indexOf("Rocket");
console.log(idx2);
