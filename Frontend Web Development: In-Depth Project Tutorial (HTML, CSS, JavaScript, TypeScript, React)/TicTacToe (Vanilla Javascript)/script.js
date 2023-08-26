// TODO: Player can make a move
/*  What to check after a "game move"? 
    - Who is currently up
    - Did the latest move cause a tie or a game win
    - Who won? was it a tie?
*/
// TODO: New round
// TODO: Reset current round
// DONE: Toggle menu

const App = {
  // All of our selected HTML elements, we put these inside
  // an attribute so that they will not be used on a global scale
  // This is an object attribute that contains more object attributes
  $: {
    // For toggling menu options
    // Selecting an element using it's data-id, data-ids' are used to
    // interact with elements better using javascript
    // Think of data-ids as a custom selector for elements
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    // Selects all elements that have a data-id of square
    squares: document.querySelectorAll('[data-id="square"]'),
  },

  init() {
    App.registerEventListeners();
  },

  registerEventListeners() {
    // A method within our App object that shows menuItems
    // Adding an event listener to menu
    App.$.menu.addEventListener("click", (event) => {
      // Toggling hidden class applied to .items class in .menu
      // .classlist reveals classes applied to .items and .toggle
      // removes and reapplies the hidden class
      App.$.menuItems.classList.toggle("hidden");
    });

    // After we click on one of the buttons below, the menu containing
    // it will disappear since it is still under the menu div and that
    // div re-applies the hidden class whenever a button is clicked
    // within the div
    // TODO
    App.$.resetBtn.addEventListener("click", (event) => {
      console.log("Reset the game");
    });

    // TODO
    App.$.newRoundBtn.addEventListener("click", (event) => {
      console.log("Add a new round");
    });

    // Iterating through our squares attribute which contains all divs
    // that have the data-ids of "square"
    // TODO
    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        // Printing the id of the square whenever we click on a square
        console.log(`Square with id ${event.target.id} was clicked`);
        // Adding an icon to our square after we click on it
        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-x", "yellow"); // setting multiple classes

        event.target.replaceChildren(icon);

        // HTML elements that we will be applying to our squares
        //<i class="fa-solid fa-x yellow"></i>
        //<i class="fa-solid fa-o turquoise"></i>
      });
    });
  },
};

// Waits for the document to fully load, calls the init function
// in our App class and adds an event listener to our menu parameter
window.addEventListener("load", App.init);
