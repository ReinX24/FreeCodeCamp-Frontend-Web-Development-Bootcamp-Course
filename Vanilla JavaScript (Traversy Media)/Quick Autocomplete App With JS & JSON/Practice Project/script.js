const searchInput = document.querySelector('#search');
const matchList = document.querySelector('#match-list');

async function searchStates(searchInput) {
    const res = await fetch('states.json');
    const jsonStates = await res.json();

    let matches = jsonStates.filter((eachState) => {
        const regex = new RegExp(`^${searchInput}`, 'gi');
        return eachState.name.match(regex) || eachState.abbr.match(regex);
    });

    if (searchInput.length == 0) {
        matches = [];
        matchList.innerHTML = '';
    }

    outputHTML(matches);
}

function outputHTML(stateMatches) {
    let resultHTML = '';
    stateMatches.forEach((eachState) => {
        resultHTML += `
        <div>
        <h4>${eachState.name} ${eachState.abbr}</h4>
        <p>${eachState.lat} ${eachState.long}</p>
        </div>
        `;
    })

    matchList.innerHTML = resultHTML;
}

searchInput.addEventListener('input', () => searchStates(searchInput.value));