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
        <div class="card border-light mb-4">
            <div class="card-body">
                <h4 class="card-title">${eachState.name} <span class="text-primary">${eachState.abbr}</span></h4>
                <p class="card-text">Lat: ${eachState.lat} / Long: ${eachState.long}</p>
            </div>
        </div>
        `;
    })

    matchList.innerHTML = resultHTML;
}

searchInput.addEventListener('input', () => searchStates(searchInput.value));