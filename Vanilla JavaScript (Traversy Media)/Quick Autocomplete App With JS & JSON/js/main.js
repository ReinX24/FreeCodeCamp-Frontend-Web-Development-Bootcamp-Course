const search = document.querySelector('#search');
const matchList = document.querySelector('#match-list');

// Search states.json and filter it
const searchStates = async (searchText) => {
    const res = await fetch('data/states.json');
    const states = await res.json();
    console.log(states);
    // Resume link: https://youtu.be/1iysNUrI3lw?si=guIyCR67pcJkui7G&t=606
}

search.addEventListener('input', searchStates(search.value));
