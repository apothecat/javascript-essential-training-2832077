/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

// Build an array with 8 items

const myArray = [
  "lamp",
  "notebook",
  "mouse",
  "nuts",
  "phone",
  "mug",
  "glass",
  "pen",
];
console.log(myArray);

// Remove the last item

myArray.pop();

console.log(myArray);

// Add the last item as the first item on the array

myArray.unshift(myArray.pop());

console.log(myArray);

// Sort the items by alphabetical order

myArray.sort();

console.log(myArray);

// Use the find() method to find a specific item in the array

const found = myArray.find((item) => item === "mug");
//const foundIndex = myArray.findIndex((item) => item === "mug");
console.log("item:", found);
// Remove the item you found using the find method from the array.

const myNewArray = myArray.filter((item) => item != "mug");
console.log(myNewArray);
