
const poundsInput = document.querySelector('#pounds-input');
const gramsInput = document.querySelector('#grams-input');
const kgInput = document.querySelector('#kg-input');
const ozInput = document.querySelector('#oz-input');

poundsInput.addEventListener('input', () => {
    const lbs = poundsInput.value;
    gramsInput.value = lbs * 453.597024404;
    kgInput.value = lbs * 0.453592;
    ozInput.value = lbs * 0.0283495;
})

gramsInput.addEventListener('input', () => {
    const grams = gramsInput.value;
    poundsInput.value = grams * 0.00220462;
    kgInput.value = grams * 0.001;
    ozInput.value = grams * 0.035274;
})

kgInput.addEventListener('input', () => {
    const kg = kgInput.value;
    poundsInput.value = kg * 2.20462;
    gramsInput.value = kg * 1000;
    ozInput.value = kg * 35.274;
})

ozInput.addEventListener('input', () => {
    const oz = ozInput.value;
    poundsInput.value = oz * 0.0625;
    gramsInput.value = oz * 28.3495;
    kgInput.value = oz * 0.0283495;
})