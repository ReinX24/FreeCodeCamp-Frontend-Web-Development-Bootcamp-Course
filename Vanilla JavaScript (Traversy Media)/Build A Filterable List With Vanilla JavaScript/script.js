// Get input element
const filterInput = document.getElementById('filterInput');
// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get the value of the filter input
    const filterValue = filterInput.value.toUpperCase();
    // Get names ul
    const ul = document.getElementById('names');
    // Get li elements from ul, li with a class of collection-item
    const li = ul.querySelectorAll('li.collection-item');

    // Looping through all our li elements
    for (let i = 0; i < li.length; i++) {
        // Get current iterated li and get the first element since
        // getElementsByTagName returns an array
        const currentLi = li[i].getElementsByTagName('a')[0];
        // If currentLi matches
        if (currentLi.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}