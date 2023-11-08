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
        matchList.innerHTML = '';
    }

    outputHtml(matches);
}

const outputHtml = (matches) => {
    // Checks if there are matches in the first place
    if (matches.length > 0) {
        const html = matches.map((eachMatch) => `
            <div class = "card card-body mb-1">
            <h4>${eachMatch.name} (${eachMatch.abbr}) <span class = "text-primary">${eachMatch.capital}</span></h4>
            <small>Lat: ${eachMatch.lat} / Long: ${eachMatch.long}</small>
        </div>
        `).join('');

        matchList.innerHTML = html;
    }

}

search.addEventListener('input', () => searchStates(search.value));
