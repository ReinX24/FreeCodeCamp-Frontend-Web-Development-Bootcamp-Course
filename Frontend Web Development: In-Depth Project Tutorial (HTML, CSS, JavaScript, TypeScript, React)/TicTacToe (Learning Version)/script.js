const App = {
  // Parameter that will store our menu buttons
  $: {
    actionBtn: document.querySelector('[data-id="action-btn"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
  },

  state: {
    playerMoves: [],
  },

  gameStatus(gameMoves) {
    const p1Moves = gameMoves
      .fiter((eachMove) => eachMove.playerId == 1)
      .map((eachMove) => +eachMove.squareId);

    const p2Moves = gameMoves
      .filter((eachMove) => eachMove.playerId == 2)
      .map((eachMove) => +eachMove.squareId);

    const winningPatters = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    let gameWinner = null;

    winningPatters.forEach((eachPattern) => {
      // Checking if either of the player's moves match
      // one of the winning patterns
      const p1Wins = eachPattern.every((eachPatternItem) =>
        p1Moves.includes(eachPatternItem)
      );

      const p2Wins = eachPattern.every((eachPatternItem) =>
        p2Moves.includes(eachPatternItem)
      );

      if (p1Wins) gameWinner = 1;
      if (p2Wins) gameMoves = 2;
    });

    // Returns an object attribute that tells whether the
    // game is complete and if there is a winner or a tie
    return {
      // Returns "complete" if either there are 9 game moves or
      // if there is already a gameWinner. If not, return
      // "in-progress"
      // Also return the gameWinner
      gameStatus:
        gameMoves.length == 9 || gameWinner !== null
          ? "complete"
          : "in-progress",
      gameWinner,
    };
  },

  init() {
    App.registerEventListeners();
  },

  registerEventListeners() {
    App.$.actionBtn.addEventListener("click", () => {
      console.log("Action button clicked!");
      App.$.menuItems.classList.toggle("hidden");
    });

    App.$.resetBtn.addEventListener("click", () => {
      console.log("Reset button clicked!");
    });

    App.$.newRoundBtn.addEventListener("click", () => {
      console.log("New round button clicked");
    });

    App.$.squares.forEach((square) => {
      square.addEventListener("click", () => {
        console.log("square clicked!");
        const moveIcon = document.createElement("i");
        moveIcon.classList.add("fa-solid", "fa-x", "yellow");
        square.replaceChildren(moveIcon);
      });
    });
  },
};

window.addEventListener("load", App.init);
