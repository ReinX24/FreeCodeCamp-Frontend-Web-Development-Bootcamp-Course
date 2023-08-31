const App = {
  // Parameter that will store our menu buttons
  $: {
    actionBtn: document.querySelector('[data-id="action-btn"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
    turnLabel: document.querySelector('[data-id="turn"]'),
    modalBox: document.querySelector('[data-id="modal"]'),
    modalText: document.querySelector('[data-id="modal-text"]'),
    modalBtn: document.querySelector('[data-id="modal-btn"]'),
  },

  state: {
    playerMoves: [],
  },

  getGameStatus(playerMoves) {
    const p1Moves = playerMoves
      .filter((eachMove) => eachMove.playerId == 1)
      .map((eachMove) => +eachMove.squareId);

    const p2Moves = playerMoves
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
      if (p2Wins) playerMoves = 2;
    });

    // Returns an object attribute that tells whether the
    // game is complete and if there is a winner or a tie
    return {
      // Returns "complete" if either there are 9 game moves or
      // if there is already a gameWinner. If not, return
      // "in-progress"
      // Also return the gameWinner
      gameStatus:
        playerMoves.length == 9 || gameWinner !== null
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

    App.$.modalBtn.addEventListener("click", () => {
      App.state.playerMoves = [];
      App.$.modalBox.classList.add("hidden");
      App.$.squares.forEach((eachSquare) => {
        eachSquare.replaceChildren();
      });
    });

    App.$.squares.forEach((square) => {
      square.addEventListener("click", () => {
        // Checks if clicked square is already clicked by a player
        const hasMove = (squareId) => {
          const existingMove = App.state.playerMoves.find(
            (eachMove) => eachMove.squareId === squareId
          );
          return existingMove !== undefined; // returns true if there is a match
        };

        // Uses the hasMove function to check if that square is already used
        if (hasMove(+square.id)) {
          return; // terminates this function
        }

        const lastPlayerMove = App.state.playerMoves.at(-1);
        const getOppositePlayer = (playerId) => (playerId == 1 ? 2 : 1);
        const currentPlayer =
          App.state.playerMoves.length === 0
            ? 1
            : getOppositePlayer(lastPlayerMove.playerId);
        const nextPlayer = getOppositePlayer(currentPlayer);

        const squareIcon = document.createElement("i");
        const turnIcon = document.createElement("i");
        const turnLabel = document.createElement("p");
        turnLabel.innerText = `Player ${nextPlayer}, you are up!`;

        if (currentPlayer == 1) {
          squareIcon.classList.add("fa-solid", "fa-x", "yellow");
          turnIcon.classList.add("fa-solid", "fa-o", "turquoise");
          turnLabel.classList = "turquoise";
        } else {
          squareIcon.classList.add("fa-solid", "fa-o", "turquoise");
          turnIcon.classList.add("fa-solid", "fa-x", "yellow");
          turnLabel.classList = "yellow";
        }

        App.$.turnLabel.replaceChildren(turnIcon, turnLabel);

        App.state.playerMoves.push({
          squareId: +square.id,
          playerId: currentPlayer,
        });

        square.replaceChildren(squareIcon);

        const currentGameStatus = App.getGameStatus(App.state.playerMoves);

        if (currentGameStatus.gameStatus == "complete") {
          App.$.modalBox.classList.remove("hidden");
          let modalMessage = "";
          if (currentGameStatus.gameWinner) {
            modalMessage = `Player ${currentGameStatus.gameWinner} wins!`;
          } else {
            modalMessage = `Tie game!`;
          }
          App.$.modalText.textContent = modalMessage;
        }
      });
    });
  },
};

window.addEventListener("load", App.init);
