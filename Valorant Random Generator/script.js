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
    clearAll();
    const newRandomAgent = getRandomData('agents');
    const randomAgentName = document.createElement('p');
    const randomAgentImg = document.createElement('img');
    randomAgentName.textContent = newRandomAgent.agentName;
    randomAgentImg.src = newRandomAgent.agentPhotoLink;

    const randomAgentDiv = document.querySelector('.agent-content');
    randomAgentDiv.appendChild(randomAgentName);
    randomAgentDiv.appendChild(randomAgentImg);
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
    return data[type][rn(data[type].length)];
}

const agents = [
    { agentName: 'Astra', agentPhotoLink: 'AgentPhotos/astraPhoto.png' },
    { agentName: 'Breach', agentPhotoLink: 'AgentPhotos/breachPhoto.png' }
];
const maps = [];
const guns = [];
const trivia = [];

// Just a little helper function
function rn(len) {
    return Math.floor(Math.random() * len);
}

const data = {
    agents,
    maps,
    guns,
    trivia
};
