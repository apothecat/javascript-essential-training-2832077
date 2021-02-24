/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changeName: function (newName) {
    this.name = newName;
  },
  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
  changePocketNum: function (newPocketNum) {
    this.pocketNum = newPocketNum;
  },
};

console.log("Name before:", backpack.name);
console.log("Volume before:", backpack.volume);
console.log("Colour before:", backpack.color);
console.log("Pocket number before:", backpack.pocketNum);
console.log("Left strap before:", backpack.strapLength.left);
console.log("Right strap before:", backpack.strapLength.right);
console.log("lidOpen before", backpack.lidOpen);

backpack.changeName("My Backpack");
backpack.changeVolume(40);
backpack.changeColor("blue");
backpack.changePocketNum(20);
backpack.newStrapLength(15, 15);
backpack.toggleLid(true);

console.log("Name after:", backpack.name);
console.log("Volume after:", backpack.volume);
console.log("Colour after:", backpack.color);
console.log("Pocket number after:", backpack.pocketNum);
console.log("Left strap before:", backpack.strapLength.left);
console.log("Right strap after:", backpack.strapLength.right);
console.log("Lid open after:", backpack.lidOpen);
