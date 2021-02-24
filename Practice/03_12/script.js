/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Cup from "./Cup.js";

const everydayPack = new Backpack(
  "Everyday backpack",
  40,
  "blue",
  5,
  20,
  20,
  false
);

const myCup = new Cup(500, "mushrooms", true, false, "coffee", "hot");

console.log("Everyday backpack:", everydayPack);
console.log("Everyday backpack colour:", everydayPack.color);

console.log("My cup:", myCup);
console.log("My cup design:", myCup.design);
console.log("My cup contents type before:", myCup.contentsType);
myCup.changeContentsType("green tea");
console.log("My cup contents type after:", myCup.contentsType);
