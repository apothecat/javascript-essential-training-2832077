/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

let myText = "works!";

function basicFunction(someText) {
  let output = `<h1>Basic function ${someText}</h1>`;
  return output;
  //console.log("basicFunction works!");
}

let basicFunctionExpression = function (someText) {
  let output = `<h1>Basic function expression ${someText}</h1>`;
  return output;
};

let arrowFunction = (someText) => {
  let output = `<h1>Arrow function ${someText}</h1>`;
  return output;
};

let main = document.querySelector("main");

let basicFunctionContent = basicFunction(myText);
let basicFunctionHeader = document.createElement("h1");
basicFunctionHeader.innerHTML = basicFunctionContent;

let basicFunctionExpressionContent = basicFunctionExpression(myText);
let basicFunctionExpressioHeader = document.createElement("h1");
basicFunctionExpressioHeader.innerHTML = basicFunctionExpressionContent;

let arrowFunctionContent = arrowFunction(myText);
let arrowFunctionHeader = document.createElement("h1");
arrowFunctionHeader.innerHTML = arrowFunctionContent;

main.append(basicFunctionHeader);
main.append(basicFunctionExpressioHeader);
main.append(arrowFunctionHeader);
