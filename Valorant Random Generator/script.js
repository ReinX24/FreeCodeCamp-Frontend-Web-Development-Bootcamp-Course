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
    clearAll();

    const newRandomAgent = getRandomData('agents');
    const randomAgentName = document.createElement('p');
    const randomAgentImg = document.createElement('img');

    randomAgentName.textContent = newRandomAgent.agentName;
    randomAgentImg.src = newRandomAgent.agentPhotoLink;
    randomAgentImg.alt = newRandomAgent.agentName + ' photo';

    const randomAgentDiv = document.querySelector('.agent-content');
    randomAgentDiv.appendChild(randomAgentName);
    randomAgentDiv.appendChild(randomAgentImg);
}

function randomMap() {
    clearAll();

    const newRandomMap = getRandomData('maps');
    const randomMapName = document.createElement('p');
    const randomMapImg = document.createElement('img');

    randomMapName.textContent = newRandomMap.mapName;
    randomMapImg.src = newRandomMap.mapPhoto;
    randomMapImg.alt = newRandomMap.mapName + ' photo';

    const randomMapDiv = document.querySelector('.map-content');
    randomMapDiv.appendChild(randomMapName);
    randomMapDiv.appendChild(randomMapImg);
}

function randomGun() {
    clearAll();

    const newRandomGun = getRandomData('guns');
    const randomGunName = document.createElement('p');
    const randomGunImg = document.createElement('img');

    randomGunName.textContent = newRandomGun.gunName;
    randomGunImg.src = newRandomGun.gunPhoto;
    randomGunImg.alt = newRandomGun.gunName + ' photo';

    const randomGunDiv = document.querySelector('.gun-content');
    randomGunDiv.appendChild(randomGunName);
    randomGunDiv.appendChild(randomGunImg);
}

function randomTrivia() {
    clearAll();

    const newRandomTrivia = getRandomData('trivia');
    const randomTriviaQuestion = document.createElement('p');
    const randomTriviaAnswer = document.createElement('p');

    randomTriviaQuestion.textContent = newRandomTrivia.triviaQuestion;
    randomTriviaAnswer.textContent = newRandomTrivia.triviaAnswer;
    randomTriviaAnswer.hidden = true; // to be hidden for now

    const randomTriviaDiv = document.querySelector('.trivia-content');
    randomTriviaDiv.appendChild(randomTriviaQuestion);
    randomTriviaDiv.appendChild(randomTriviaAnswer);
}

randomAgentButton.onclick = randomAgent;
randomMapButton.onclick = randomMap;
randomGunButton.onclick = randomGun;
randomTriviaButton.onclick = randomTrivia;

function getRandomData(type) {
    return data[type][rn(data[type].length)];
}

const agents = [
    { agentName: 'Astra', agentPhotoLink: 'AgentPhotos/astraPhoto.webp' },
    { agentName: 'Breach', agentPhotoLink: 'AgentPhotos/breachPhoto.webp' },
    { agentName: 'Brimstone', agentPhotoLink: 'AgentPhotos/brimstonePhoto.webp' },
    { agentName: 'Chamber', agentPhotoLink: 'AgentPhotos/chamberPhoto.webp' },
    { agentName: 'Cypher', agentPhotoLink: 'AgentPhotos/cypherPhoto.webp' },
    { agentName: 'Deadlock', agentPhotoLink: 'AgentPhotos/deadlockPhoto.webp' },
    { agentName: 'Fade', agentPhotoLink: 'AgentPhotos/fadePhoto.webp' },
    { agentName: 'Gekko', agentPhotoLink: 'AgentPhotos/gekkoPhoto.webp' },
    { agentName: 'Harbor', agentPhotoLink: 'AgentPhotos/harborPhoto.webp' },
    { agentName: 'Jett', agentPhotoLink: 'AgentPhotos/jettPhoto.webp' },
    { agentName: 'KAYO', agentPhotoLink: 'AgentPhotos/kayoPhoto.webp' },
    { agentName: 'Killjoy', agentPhotoLink: 'AgentPhotos/killjoyPhoto.webp' },
    { agentName: 'Neon', agentPhotoLink: 'AgentPhotos/neonPhoto.webp' },
    { agentName: 'Omen', agentPhotoLink: 'AgentPhotos/omenPhoto.webp' },
    { agentName: 'Phoenix', agentPhotoLink: 'AgentPhotos/phoenixPhoto.webp' },
    { agentName: 'Raze', agentPhotoLink: 'AgentPhotos/razePhoto.webp' },
    { agentName: 'Reyna', agentPhotoLink: 'AgentPhotos/reynaPhoto.webp' },
    { agentName: 'Sage', agentPhotoLink: 'AgentPhotos/sagePhoto.webp' },
    { agentName: 'Skye', agentPhotoLink: 'AgentPhotos/skyePhoto.webp' },
    { agentName: 'Sova', agentPhotoLink: 'AgentPhotos/sovaPhoto.webp' },
    { agentName: 'Viper', agentPhotoLink: 'AgentPhotos/viperPhoto.webp' },
    { agentName: 'Yoru', agentPhotoLink: 'AgentPhotos/yoruPhoto.webp' }
];

const maps = [
    { mapName: 'Ascent', mapPhoto: 'MapPhotos/ascent.webp' },
    { mapName: 'Bind', mapPhoto: 'MapPhotos/bind.webp' },
    { mapName: 'Breeze', mapPhoto: 'MapPhotos/breeze.webp' },
    { mapName: 'Fracture', mapPhoto: 'MapPhotos/fracture.webp' },
    { mapName: 'Haven', mapPhoto: 'MapPhotos/haven.webp' },
    { mapName: 'Icebox', mapPhoto: 'MapPhotos/icebox.webp' },
    { mapName: 'Lotus', mapPhoto: 'MapPhotos/lotus.webp' },
    { mapName: 'Pearl', mapPhoto: 'MapPhotos/pearl.webp' },
    { mapName: 'Split', mapPhoto: 'MapPhotos/split.webp' }
];

const guns = [
    { gunName: 'Classic', gunPhoto: 'GunPhotos/classic.webp' },
    { gunName: 'Shorty', gunPhoto: 'GunPhotos/shorty.webp' },
    { gunName: 'Frenzy', gunPhoto: 'GunPhotos/frenzy.webp' },
    { gunName: 'Ghost', gunPhoto: 'GunPhotos/ghost.webp' },
    { gunName: 'Sheriff', gunPhoto: 'GunPhotos/sheriff.webp' },
    { gunName: 'Stinger', gunPhoto: 'GunPhotos/stinger.webp' },
    { gunName: 'Spectre', gunPhoto: 'GunPhotos/spectre.webp' },
    { gunName: 'Bucky', gunPhoto: 'GunPhotos/bucky.webp' },
    { gunName: 'Judge', gunPhoto: 'GunPhotos/judge.webp' },
    { gunName: 'Bulldog', gunPhoto: 'GunPhotos/bulldog.webp' },
    { gunName: 'Guardian', gunPhoto: 'GunPhotos/guardian.webp' },
    { gunName: 'Phantom', gunPhoto: 'GunPhotos/phantom.webp' },
    { gunName: 'Vandal', gunPhoto: 'GunPhotos/vandal.webp' },
    { gunName: 'Marshal', gunPhoto: 'GunPhotos/marshal.webp' },
    { gunName: 'Operator', gunPhoto: 'GunPhotos/operator.webp' },
    { gunName: 'Ares', gunPhoto: 'GunPhotos/ares.webp' },
    { gunName: 'Odin', gunPhoto: 'GunPhotos/odin.webp' }
];

const trivia = [
    { triviaQuestion: 'Which team won VALORANT Champions Tour 2023: LOCK//IN São Paulo?', triviaAnswer: 'FNATIC' },
    { triviaQuestion: 'Who won the Best Esports Athlete at the Game Awards 2022?', triviaAnswer: 'Yay' },
    { triviaQuestion: 'Which team won VALORANT Champions 2022?', triviaAnswer: 'LOUD' },
    { triviaQuestion: 'Which team won VALORANT Champions Tour 2021: Stage 2 Masters - Reykjavík?', triviaAnswer: 'Sentinels' },
    { triviaQuestion: 'Who was the popular content creator / streamer that Sentinels added to their roster for VALORANT Champions Tour 2022: North America Last Chance Qualifier?', triviaAnswer: 'shroud' },
    { triviaQuestion: 'When was Valorant officially launched in China?', triviaAnswer: 'July 12th, 2023' },
    { triviaQuestion: 'When was Valorant officially released?', triviaAnswer: 'June 2nd, 2020' },
    { triviaQuestion: 'What is the name of the Filipina Agent that was added to Valorant?', triviaAnswer: 'Neon' },
    { triviaQuestion: 'What is Jett\'s real name?', triviaAnswer: 'Joon-Hee' },
    { triviaQuestion: 'Who is the most played agent in Valorant during 2022?', triviaAnswer: 'Reyna' }
];

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
