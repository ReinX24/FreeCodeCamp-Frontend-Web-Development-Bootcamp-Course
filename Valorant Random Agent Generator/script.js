const iconButton = document.querySelector('.icon-button');
const rulesButton = document.querySelector('.rules-button');
const randomAgentButton = document.querySelector('.random-agent-button');
const randomDuelistButton = document.querySelector('.random-duelist-button');
const randomControllerButton = document.querySelector('.random-controller-button');
const randomInitiatorButton = document.querySelector('.random-initiator-button');
const randomSentinelButton = document.querySelector('.random-sentinel-button');

function refreshPage() {
    location.reload();
}

function showRules() {
    const rulesContent = document.querySelector('.agent-box');
    const rulesHeader = document.createElement('h4');
    const rulesList = document.createElement('ol');
    const ruleOne = document.createElement('li');
    const ruleTwo = document.createElement('li');
    const ruleThree = document.createElement('li');
    const ruleFour = document.createElement('li');

    rulesContent.innerHTML = '';
    rulesContent.style.lineHeight = '1.8rem';
    rulesHeader.textContent = 'Rules (Optional)';

    ruleOne.textContent = 'Roll only once, no re-rolls.';
    ruleTwo.textContent = 'You are allowed to re-roll if you main the agent and want to try another agent.';
    ruleThree.textContent = 'Let your teammates know you are using an agent randomizer.';
    ruleFour.textContent = 'Never surrender!';

    rulesList.appendChild(ruleOne);
    rulesList.appendChild(ruleTwo);
    rulesList.appendChild(ruleThree);
    rulesList.appendChild(ruleFour);

    rulesContent.append(rulesHeader);
    rulesContent.append(rulesList);
}

function randomAgent() {
    const roleArr = ['duelists', 'controllers', 'initiators', 'sentinels'];
    const randomRole = roleArr[Math.floor(Math.random() * roleArr.length)];
    const randomAgent = getRandomAgent(randomRole);
    changePageContent(randomAgent);
}

function randomDuelist() {
    const randomDuelist = getRandomAgent('duelists');
    changePageContent(randomDuelist);
}

function randomController() {
    const randomController = getRandomAgent('controllers');
    changePageContent(randomController);
}

function randomInitiator() {
    const randomInitiator = getRandomAgent('initiators');
    changePageContent(randomInitiator);
}

function randomSentinel() {
    const randomSentinel = getRandomAgent('sentinels');
    changePageContent(randomSentinel);
}

function changePageContent(agentInfo) {

    const agentContent = document.querySelector('.agent-box').innerHTML = '';

    const agentName = document.createElement('h2');
    const agentRole = document.createElement('p');
    const agentPhoto = document.createElement('img');
    const agentDescription = document.createElement('p');

    agentPhoto.classList.add('agent-photo');
    agentDescription.classList.add('agent-description');

    agentName.textContent = agentInfo.AgentName;
    agentRole.textContent = agentInfo.AgentRole;
    agentPhoto.setAttribute('src', agentInfo.AgentPhoto);
    agentPhoto.style.backgroundColor = agentInfo.AgentColor;
    // TODO: add agent description, will only show in the desktop version, will be hidden in the mobile version
    agentDescription.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

    document.querySelector('.agent-box').append(agentName);
    document.querySelector('.agent-box').append(agentPhoto);
    document.querySelector('.agent-box').append(agentRole);
    document.querySelector('.agent-box').append(agentDescription);
}

iconButton.onclick = refreshPage;
rulesButton.onclick = showRules;
randomAgentButton.onclick = randomAgent;
randomDuelistButton.onclick = randomDuelist;
randomControllerButton.onclick = randomController;
randomInitiatorButton.onclick = randomInitiator;
randomSentinelButton.onclick = randomSentinel;

function getRandomAgent(agentRole) {
    const duelistAgents = agentRoles[agentRole];
    return duelistAgents[Math.floor(Math.random() * duelistAgents.length)];
}

// TODO: add descriptions for each agent
const duelists = [
    {
        AgentName: 'Phoenix',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/phoenixPhoto.webp',
        AgentColor: '#ff8513'
    },
    {
        AgentName: 'Jett',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/jettPhoto.webp',
        AgentColor: '#e9f4f7'
    },
    {
        AgentName: 'Reyna',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/reynaPhoto.webp',
        AgentColor: '#c55bfc'
    },
    {
        AgentName: 'Raze',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/razePhoto.webp',
        AgentColor: '#fec54d'
    },
    {
        AgentName: 'Yoru',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/yoruPhoto.webp',
        AgentColor: '#4a60b6'
    },
    {
        AgentName: 'Neon',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/neonPhoto.webp',
        AgentColor: '#113d9e'
    }
];
const controllers = [
    {
        AgentName: 'Brimstone',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/brimstonePhoto.webp',
        AgentColor: '#f08a33'
    },
    {
        AgentName: 'Viper',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/viperPhoto.webp',
        AgentColor: '#5c7f6d'
    },
    {
        AgentName: 'Omen',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/omenPhoto.webp',
        AgentColor: '#766c92'
    },
    {
        AgentName: 'Astra',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/astraPhoto.webp',
        AgentColor: '#9440c1'
    },
    {
        AgentName: 'Harbor',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/harborPhoto.webp',
        AgentColor: '#008080'
    }
];
const initiators = [
    {
        AgentName: 'Sova',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/sovaPhoto.webp',
        AgentColor: '#38b3dd'
    },
    {
        AgentName: 'Breach',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/breachPhoto.webp',
        AgentColor: '#fff682'
    },
    {
        AgentName: 'Skye',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/skyePhoto.webp',
        AgentColor: '#39d8a6'
    },
    {
        AgentName: 'KAY/O',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/kayoPhoto.webp',
        AgentColor: '#6e95a9'
    },
    {
        AgentName: 'Fade',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/fadePhoto.webp',
        AgentColor: '#517baf'
    },
    {
        AgentName: 'Gekko',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/gekkoPhoto.webp',
        AgentColor: '#95F26D'
    }
];
const sentinels = [
    {
        AgentName: 'Cypher',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/cypherPhoto.webp',
        AgentColor: '#b9b9b9'
    },
    {
        AgentName: 'Killjoy',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/killjoyPhoto.webp',
        AgentColor: '#fadc31'
    },
    {
        AgentName: 'Sage',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/sagePhoto.webp',
        AgentColor: '#16b199'
    },
    {
        AgentName: 'Chamber',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/chamberPhoto.webp',
        AgentColor: '#faa41c'
    },
    {
        AgentName: 'Deadlock',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/deadlockPhoto.webp',
        AgentColor: '#cce0de'
    }
];

const agentRoles = { duelists, controllers, initiators, sentinels };