const randomAgentButton = document.querySelector('.random-agent-button');
const randomDuelistButton = document.querySelector('.random-duelist-button');
const randomControllerButton = document.querySelector('.random-controller-button');
const randomInitiatorButton = document.querySelector('.random-initiator-button');
const randomSentinelButton = document.querySelector('.random-sentinel-button');

function randomAgent() {
    console.log('random agent generated!');
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
    const agentName = document.querySelector('.agent-name');
    const agentRole = document.querySelector('.agent-role');
    const agentPhoto = document.querySelector('.agent-photo');

    agentName.textContent = agentInfo.AgentName;
    agentRole.textContent = agentInfo.AgentRole;
    agentPhoto.setAttribute('src', agentInfo.AgentPhoto);
}

randomAgentButton.onclick = randomAgent;
randomDuelistButton.onclick = randomDuelist;
randomControllerButton.onclick = randomController;
randomInitiatorButton.onclick = randomInitiator;
randomSentinelButton.onclick = randomSentinel;

function getRandomAgent(agentRole) {
    const duelistAgents = agentRoles[agentRole];
    return duelistAgents[Math.floor(Math.random() * duelistAgents.length)];
}

// TODO: finish creating arrays for each agent
const duelists = [
    {
        AgentName: 'Phoenix',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/phoenixPhoto.webp'
    },
    {
        AgentName: 'Jett',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/jettPhoto.webp'
    },
    {
        AgentName: 'Reyna',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/reynaPhoto.webp'
    },
    {
        AgentName: 'Raze',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/razePhoto.webp'
    },
    {
        AgentName: 'Yoru',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/yoruPhoto.webp'
    },
    {
        AgentName: 'Neon',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/neonPhoto.webp'
    }
];
const controllers = [
    {
        AgentName: 'Brimstone',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/brimstonePhoto.webp'
    },
    {
        AgentName: 'Viper',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/viperPhoto.webp'
    },
    {
        AgentName: 'Omen',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/omenPhoto.webp'
    },
    {
        AgentName: 'Astra',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/astraPhoto.webp'
    },
    {
        AgentName: 'Harbor',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/harborPhoto.webp'
    }
];
const initiators = [
    {
        AgentName: 'Sova',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/sovaPhoto.webp'
    },
    {
        AgentName: 'Breach',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/breachPhoto.webp'
    },
    {
        AgentName: 'Skye',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/skyePhoto.webp'
    },
    {
        AgentName: 'KAY/O',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/kayoPhoto.webp'
    },
    {
        AgentName: 'Fade',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/fadePhoto.webp'
    },
    {
        AgentName: 'Gekko',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/gekkoPhoto.webp'
    }
];
const sentinels = [
    {
        AgentName: 'Cypher',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/cypherPhoto.webp'
    },
    {
        AgentName: 'Killjoy',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/killjoyPhoto.webp'
    },
    {
        AgentName: 'Sage',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/sagePhoto.webp'
    },
    {
        AgentName: 'Chamberr',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/cypherPhoto.webp'
    },
    {
        AgentName: 'Cypher',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/cypherPhoto.webp'
    }
];

const agentRoles = { duelists, controllers, initiators, sentinels };