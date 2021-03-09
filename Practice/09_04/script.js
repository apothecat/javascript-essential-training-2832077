// Practice: Play with event listeners

// Use an event listener and CSS either inline or
// through an added class to draw a highlight around the
// entire grid when you hover over it with your mouse.

// event = mouseover
// target = .grid
// css element = border-color

const grid = document.querySelector(".grid");

grid.addEventListener("mouseover", () => {
  grid.classList.add("highlight");
});

grid.addEventListener("mouseout", () => {
  grid.classList.remove("highlight");
});

//  Add an event listener to each grid cell to highlight
// that cell when you hover your mouse over it.

// target = cell cell01
// event = mouseover
// css element = cell

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", (e) => {
    //console.log(e);
    cell.classList.add("highlight");
  });
});

cells.forEach((cell) => {
  cell.addEventListener("mouseleave", (e) => {
    //console.log(e);
    cell.classList.remove("highlight");
  });
});

//  Add an event listener to each grid cell to change its background color when it is clicked.

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    console.log(e);
    //cell.style.backgroundColor = "red";
    cell.classList.toggle("active");
  });
});

//  Add an event listener to a specific key on the keyboard
// to change the background color of the whole page - from dark to light and back again.

const body = document.querySelector("body");

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName == "Control") {
    body.classList.toggle("darkmode");
  }
});
