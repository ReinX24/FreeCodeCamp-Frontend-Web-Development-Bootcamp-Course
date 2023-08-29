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

  // TODO: return here, will finish javascript of original first
  gameStatus(gameMoves) {},

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
