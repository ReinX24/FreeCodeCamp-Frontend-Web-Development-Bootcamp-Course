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

  // This is an attribute that will keep track of the game states
  state: {
    // currentPlayer: 1,
    moves: [],
  },

  getGameStatus(moves) {
    // .filter gets the objects with playerIds of 1 or 2 and .map returns an array
    // that only contains the squareId of the object
    const p1Moves = moves
      .filter((move) => move.playerId == 1)
      .map((move) => +move.squareId);
    const p2Moves = moves
      .filter((move) => move.playerId == 2)
      .map((move) => move.playerId);

    console.log(p1Moves);
    console.log(p2Moves);

    // Checking if there is a winner or if it is a tie game
    const winningPatterns = [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
    ];

    let gameWinner = null;

    // Each inner array in winningPatterns is iterated through and put in pattern
    // After that, we check if p1Moves and p2Moves contains all elements in the
    // current iterated array
    // This returns either true or false, depending if p1Moves or p2Moves contains
    // at least all the elements of one of the inner arrays in winningPatters
    winningPatterns.forEach((pattern) => {
      const p1Wins = pattern.every((v) => p1Moves.includes(v));
      const p2Wins = pattern.every((v) => p2Moves.includes(v));

      if (p1Wins) gameWinner = 1;
      if (p2Wins) gameWinner = 2;
    });

    return {
      // If the current moves array's length is equal to 9, the game is over
      // We also check if the game is a tie
      status:
        moves.length == 9 || gameWinner != null ? "complete" : "in-progress", // in-progress | complete
      gameWinner, // 1 | 2 | null (a tie)
    };
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
    App.$.resetBtn.addEventListener("click", (event) => {
      console.log("Reset the game");
    });

    App.$.newRoundBtn.addEventListener("click", (event) => {
      console.log("Add a new round");
    });

    // Iterating through our squares attribute which contains all divs
    // that have the data-ids of "square"
    App.$.squares.forEach((square) => {
      square.addEventListener("click", () => {
        // Printing the id of the square whenever we click on a square
        // console.log(`Square with id ${square.id} was clicked`);
        // console.log(`The current player is ${App.state.currentPlayer}`);
        // console.log("Square: ", square); // this will show the square attributes
        // console.log("Event target: ", event.target); // this will show the attributes of a specific clicked element

        // Checking if the square that we chose has already been filled with an x or o
        // if (square.hasChildNodes()) {
        //   return; // terminates function, does not run code below
        // }

        // Checks if we can do a move in the current square
        const hasMove = (sqaureId) => {
          // Checks if a move has already been done on the square we clicked on
          // Each object in moves is stored in move and we get the squareId and compare it
          // to the squareId of the square that we clicked on
          const existingMove = App.state.moves.find(
            (move) => move.squareId === sqaureId
          );
          // Returns whether there has been a move done to that square or not
          return existingMove !== undefined;
        };

        // Calling the hasMove function and checking if the current clicked square has
        // already been clicked
        if (hasMove(+square.id)) {
          return;
        }

        // Storing the current player
        // Finding the last move
        const lastMove = App.state.moves.at(-1); // gets the last element in the moves array
        // Checks whether the current player is player 1 or 2
        const getOppositePlayer = (playerId) => (playerId === 1 ? 2 : 1);
        // If there are no moves done yet, the current player is one
        // Else, check the last playerId of the last move
        const currentPlayer =
          App.state.moves.length === 0
            ? 1
            : getOppositePlayer(lastMove.playerId);

        // Adding an icon to add to our square after we click on it
        const icon = document.createElement("i");

        // Checking which type of icon to add to the square
        if (currentPlayer == 1) {
          // In this case, player 1 will be the yellow x
          icon.classList.add("fa-solid", "fa-x", "yellow"); // setting multiple classes
        } else {
          // Player 2 will te the turquoise o
          icon.classList.add("fa-solid", "fa-o", "turquoise");
        }

        // Records the last move and adds it to an array
        App.state.moves.push({
          squareId: +square.id, // the + makes sure that it is a number
          playerId: currentPlayer,
        });

        // console.log(App.state);

        // After create an icon, we will update our current player state
        // If the current player is 1, replace with 2, else replace with 1
        App.state.currentPlayer = currentPlayer === 1 ? 2 : 1;

        // Add the icon to the square that we clicked on
        square.replaceChildren(icon);

        const gameStatus = App.getGameStatus(App.state.moves);

        console.log(gameStatus);

        if (gameStatus.status === "complete") {
          if (gameStatus.gameWinner) {
            alert(`Player ${gameStatus.gameWinner} wins!`);
          }
        }

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
