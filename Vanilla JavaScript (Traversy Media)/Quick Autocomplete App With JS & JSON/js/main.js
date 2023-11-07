const search = document.querySelector('#search');
const matchList = document.querySelector('#match-list');

// Search states.json and filter it
const searchStates = async (searchText) => {
    const res = await fetch('data/states.json');
    const states = await res.json();

    // Get matches to current text input (searchText)
    let matches = states.filter((eachState) => {
        // ^ means starts with searchText, g means global, i means ignore case
        const regex = new RegExp(`^${searchText}`, 'gi');
        return eachState.name.match(regex) || eachState.abbr.match(regex);
    });

    if (searchText == 0) {
        matches = [];
    }
    console.log(matches)
}

search.addEventListener('input', () => searchStates(search.value));
