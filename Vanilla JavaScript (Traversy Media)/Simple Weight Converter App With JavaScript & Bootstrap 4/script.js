// Makes the output cards hidden when the user has not entered any input
const outputCards = document.querySelector('#output');
outputCards.style.visibility = 'hidden';

const poundsInput = document.querySelector('#lbsInput');
const gramsResult = document.querySelector('#gramsOutput');
const kgResult = document.querySelector('#kgOutput');
const ounceResult = document.querySelector('#ozOutput');

poundsInput.addEventListener('input', (e) => {
    // Getting the entered input, e refers to the event and target is the element that has that event
    const lbs = e.target.value;
    gramsResult.innerHTML = lbs / 0.0022046;
    kgResult.innerHTML = lbs / 2.2046;
    ounceResult.innerHTML = lbs * 16;
    outputCards.style.visibility = 'visible'; // shows cards
})

