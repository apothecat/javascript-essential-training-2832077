/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */

import backpackObjectArray from "./components/data.js";

// const newArticle = document.createElement("article");
// newArticle.classList.add("backpack");
// newArticle.setAttribute("id", "everyday");
// newArticle.innerHTML = content;

// main.append(newArticle);

//  * Challenge: Create an advanced function.
//  * - Loop through backpackObjectArray to create an article with the class "backpack".

const content = backpackObjectArray.map((backpackObject) => {
  const backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");

  //  * - Give the article the ID of the current backpack object.
  backpackArticle.setAttribute("id", backpackObject.id);

  // * - Set the inner HTML of the article to the existing HTML output provided in const content.

  backpackArticle.innerHTML = `
  <figure class="backpack__image">
    <img src=${backpackObject.image} alt="" />
  </figure>
  <h1 class="backpack__name">${backpackObject.name}</h1>
  <ul class="backpack__features">
    <li class="packprop backpack__volume">Volume:<span> ${
      backpackObject.volume
    }l</span></li>
    <li class="packprop backpack__color">Color:<span> ${
      backpackObject.color
    }</span></li>
    <li class="backpack__age">Age:<span> ${backpackObject.backpackAge()} days old</span></li>
    <li class="packprop backpack__pockets">Number of pockets:<span> ${
      backpackObject.pocketNum
    }</span></li>
    <li class="packprop backpack__strap">Left strap length:<span> ${
      backpackObject.strapLength.left
    } inches</span></li>
    <li class="packprop backpack__strap">Right strap length:<span> ${
      backpackObject.strapLength.right
    } inches</span></li>
    <li class="feature backpack__lid">Lid status:<span> ${
      backpackObject.lidOpen ? "open" : "closed"
    }</span></li>
  </ul>

`;

  return backpackArticle;
});

const main = document.querySelector(".maincontent");

content.forEach((backpackArticle) => {
  main.append(backpackArticle);
});
