const randomAgentButton = document.querySelector('.random-agent-button');
const randomDuelistButton = document.querySelector('.random-duelist-button');
const randomControllerButton = document.querySelector('.random-controller-button');
const randomInitiatorButton = document.querySelector('.random-initiator-button');
const randomSentinelButton = document.querySelector('.random-sentinel-button');

function randomAgent() {
    console.log('random agent generated!');
    getRandomAgent();
}

function randomDuelist() {
    console.log('random duelist generated!');
}

function randomController() {
    console.log('random controller generated!');
}

function randomInitiator() {
    console.log('random initiator generated');
}

function randomSentinel() {
    console.log('random sentinel generated');
}

randomAgentButton.onclick = randomAgent;
randomDuelistButton.onclick = randomDuelist;
randomControllerButton.onclick = randomController;
randomInitiatorButton.onclick = randomInitiator;
randomSentinelButton.onclick = randomSentinel;

function getRandomAgent() {
    const randomRole = agentRoles[Math.floor(Math.random * agentRoles.length)];
    console.log(randomRole);
}

// TODO: finish creating arrays for each agent
const duelists = [{
    AgentName: 'Jett',
    AgentRole: 'Duelist'
}, {
    AgentName: 'Yoru',
    AgentRole: 'Duelist'
}, {
    AgentName: 'Phoenix',
    AgentRole: 'Duelist'
}
];
const controllers = ['test'];
const initiators = ['test'];
const sentinels = ['test'];

const agentRoles = [duelists, controllers, initiators, sentinels];