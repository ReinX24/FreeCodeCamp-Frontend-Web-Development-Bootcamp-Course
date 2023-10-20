// Selecting all our tab buttons for different categories of icons
const tabItems = document.querySelectorAll('.tab-item');
// Selecting all the elements for our tab buttons
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    // Removing all borders from all items before adding a border to clicked item
    removeBorder();
    // Removing the show class from all tab contents before adding show to one of them
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from the DOM, this gets the id of the clicked element
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class to clicked item
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach((eachItem) => eachItem.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach((eachItem) => eachItem.classList.remove('show'));
}

// Adding event listeners to our tab buttons
tabItems.forEach((eachItem) => eachItem.addEventListener('click', selectItem));


