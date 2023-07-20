const randomAgentButton = document.querySelector('.agent-button');
const randomMapButton = document.querySelector('.map-button');
const randomGunButton = document.querySelector('.gun-button');
const randomTriviaButton = document.querySelector('.trivia-button');
const triviaAnswerButton = document.querySelector('.trivia-answer');

function clearAll() {
    document.querySelector('.agent-content').innerHTML = "";
    document.querySelector('.map-content').innerHTML = "";
    document.querySelector('.gun-content').innerHTML = "";
    document.querySelector('.trivia-content').innerHTML = "";
}

function randomAgent() {
    // TODO: finish randomAgent fucntion
    const newRandomAgent = getRandomData('agent');
    console.log(newRandomAgent);
}

function randomMap() {
    // TODO: finish randomMap function
}

function randomGun() {
    // TODO: finish randomGun function
}

function randomTrivia() {
    // TODO: finish randomTrivia function
}

randomAgentButton.onclick = randomAgent;
randomMapButton.onclick = randomMap;
randomGunButton.onclick = randomGun;
randomTriviaButton.onclick = randomTrivia;

function getRandomData(type) {
    return dataTypes[type][chooseRandomData(dataTypes[type].length)];
}

const dataTypes = { agent, map, gun, trivia };

function chooseRandomData(typeChoicesLength) {
    return Math.floor(Math.random * typeChoicesLength);
}

// TODO: for testing purposes, replace with photos in the future
const agent = ['Brimstone', 'Fade', 'Killjoy'];