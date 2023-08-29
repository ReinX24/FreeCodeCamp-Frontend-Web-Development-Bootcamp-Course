const App = {
  // Parameter that will store our menu buttons
  $: {
    actionBtn: document.querySelector('[data-id="action-btn"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
  },

  init() {
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
  },
};

window.addEventListener("load", App.init);
