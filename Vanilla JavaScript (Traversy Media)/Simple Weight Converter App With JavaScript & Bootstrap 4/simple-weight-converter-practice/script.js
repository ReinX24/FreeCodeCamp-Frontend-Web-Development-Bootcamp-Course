const outputCards = document.querySelector('#outputCards');
outputCards.style.visibility = 'hidden';

const lbsInput = document.querySelector('#lbsInput');

lbsInput.addEventListener('input', (e) => {
    const lbs = e.target.value;
    document.querySelector('#gramsOutput').innerHTML = (lbs / 0.0022046).toFixed(2);
    document.querySelector('#kgOutput').innerHTML = (lbs / 2.2046).toFixed(2);
    document.querySelector('#ozOutput').innerHTML = (lbs * 16);
    outputCards.style.visibility = '';
})