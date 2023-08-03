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

    const agentContent = document.querySelector('.agent-box');
    agentContent.innerHTML = '';

    const agentName = document.createElement('h2');
    const agentRole = document.createElement('h2');
    const agentPhoto = document.createElement('img');
    const agentDescription = document.createElement('p');

    agentPhoto.classList.add('agent-photo');
    agentDescription.classList.add('agent-description');

    agentName.textContent = agentInfo.AgentName;
    agentRole.textContent = agentInfo.AgentRole;
    agentPhoto.setAttribute('src', agentInfo.AgentPhoto);
    agentPhoto.style.backgroundColor = agentInfo.AgentColor;
    agentDescription.textContent = agentInfo.AgentDescription;

    agentContent.append(agentName);
    agentContent.append(agentPhoto);
    agentContent.append(agentRole);
    agentContent.append(agentDescription);
    agentContent.style.backgroundColor = agentInfo.CardColor;
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

const duelists = [
    {
        AgentName: 'Phoenix',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/phoenixPhoto.webp',
        AgentColor: '#ff8513',
        CardColor: '#bd431e',
        AgentDescription: 'Hailing from the U.K., Phoenix\'s star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he\'s got backup or not, he\'ll rush into a fight on his own terms.'
    },
    {
        AgentName: 'Jett',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/jettPhoto.webp',
        AgentColor: '#e9f4f7',
        CardColor: '#435680',
        AgentDescription: 'Representing her home country of South Korea, Jett\'s agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.'
    },
    {
        AgentName: 'Reyna',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/reynaPhoto.webp',
        AgentColor: '#c55bfc',
        CardColor: '#983586',
        AgentDescription: 'Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.'
    },
    {
        AgentName: 'Raze',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/razePhoto.webp',
        AgentColor: '#fec54d',
        CardColor: '#84594b',
        AgentDescription: 'Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of "boom."'
    },
    {
        AgentName: 'Yoru',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/yoruPhoto.webp',
        AgentColor: '#4a60b6',
        CardColor: '#39386d',
        AgentDescription: 'Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.'
    },
    {
        AgentName: 'Neon',
        AgentRole: 'Duelist',
        AgentPhoto: 'images/duelists/neonPhoto.webp',
        AgentColor: '#90fffc',
        CardColor: '#113d9e',
        AgentDescription: 'Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.'
    }
];
const controllers = [
    {
        AgentName: 'Brimstone',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/brimstonePhoto.webp',
        AgentColor: '#f08a33',
        CardColor: '#3d1006',
        AgentDescription: 'Joining from the U.S.A., Brimstone\'s orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander. '
    },
    {
        AgentName: 'Viper',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/viperPhoto.webp',
        AgentColor: '#5c7f6d',
        CardColor: '#274b35',
        AgentDescription: 'The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy\'s vision. If the toxins don\'t kill her prey, her mindgames surely will.'
    },
    {
        AgentName: 'Omen',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/omenPhoto.webp',
        AgentColor: '#766c92',
        CardColor: '#403a56',
        AgentDescription: 'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.'
    },
    {
        AgentName: 'Astra',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/astraPhoto.webp',
        AgentColor: '#9440c1',
        CardColor: '#292359',
        AgentDescription: 'Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she\'s always eons ahead of her enemy\'s next move.'
    },
    {
        AgentName: 'Harbor',
        AgentRole: 'Controller',
        AgentPhoto: 'images/controllers/harborPhoto.webp',
        AgentColor: '#008080',
        CardColor: '#006666',
        AgentDescription: 'Hailing from India\'s coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies, or pummel those that oppose him.'
    }
];
const initiators = [
    {
        AgentName: 'Sova',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/sovaPhoto.webp',
        AgentColor: '#38b3dd',
        CardColor: '#263ca1',
        AgentDescription: 'Born from the eternal winter of Russia\'s tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.'
    },
    {
        AgentName: 'Breach',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/breachPhoto.webp',
        AgentColor: '#fff682',
        CardColor: '#6c3318',
        AgentDescription: 'Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.'
    },
    {
        AgentName: 'Skye',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/skyePhoto.webp',
        AgentColor: '#39d8a6',
        CardColor: '#67794d',
        AgentDescription: 'Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.'
    },
    {
        AgentName: 'KAY/O',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/kayoPhoto.webp',
        AgentColor: '#6e95a9',
        CardColor: '#222c34',
        AgentDescription: 'KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to Suppress enemy abilities dismantles his opponents\' capacity to fight back, securing him and his allies the ultimate edge.'
    },
    {
        AgentName: 'Fade',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/fadePhoto.webp',
        AgentColor: '#517baf',
        CardColor: '#2d3d59',
        AgentDescription: 'Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.'
    },
    {
        AgentName: 'Gekko',
        AgentRole: 'Initiator',
        AgentPhoto: 'images/initiators/gekkoPhoto.webp',
        AgentColor: '#95F26D',
        CardColor: '#477334',
        AgentDescription: 'Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.'
    }
];
const sentinels = [
    {
        AgentName: 'Cypher',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/cypherPhoto.webp',
        AgentColor: '#b9b9b9',
        CardColor: '#3B3B3B',
        AgentDescription: 'The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy\'s every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.'
    },
    {
        AgentName: 'Killjoy',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/killjoyPhoto.webp',
        AgentColor: '#fadc31',
        CardColor: '#4a3e78',
        AgentDescription: 'The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn\'t stop her enemies, her robots\' debuff will help make short work of them.'
    },
    {
        AgentName: 'Sage',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/sagePhoto.webp',
        AgentColor: '#16b199',
        CardColor: '#38646b',
        AgentDescription: 'The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.'
    },
    {
        AgentName: 'Chamber',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/chamberPhoto.webp',
        AgentColor: '#faa41c',
        CardColor: '#3B2706',
        AgentDescription: 'Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.'
    },
    {
        AgentName: 'Deadlock',
        AgentRole: 'Sentinel',
        AgentPhoto: 'images/sentinels/deadlockPhoto.webp',
        AgentColor: '#cce0de',
        CardColor: '#586160',
        AgentDescription: 'Norwegian operative Deadlock deploys an array of cutting-edge nanowire to secure the battlefield from even the most lethal assault. No one escapes her vigilant watch, nor survives her unyielding ferocity.'
    }
];

const agentRoles = { duelists, controllers, initiators, sentinels };