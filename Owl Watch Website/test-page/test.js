const questionsCount = 20;

function generateQuestionCard(questionNumber) {
    const questionForm = document.querySelector('form');

    const questionCard = document.createElement('div');
    questionCard.classList.add('question-card');

    const questionChoices = document.createElement('div');
    questionChoices.classList.add('question-choices');

    const choiceNumber = document.createElement('p');
    choiceNumber.textContent = `Question #${questionNumber}`;

    questionCard.appendChild(choiceNumber);

    for (let i = 1; i <= 5; i++) {
        const choiceNum = document.createElement('p');
        choiceNum.textContent = i;

        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.checked = false;
        radioButton.name = `question-${questionNumber}-choice`;
        radioButton.id = `question-${questionNumber}-choice-${i}`;
        radioButton.value = i;

        if (radioButton.value == 1) {
            radioButton.checked = true;
        }

        questionChoices.appendChild(choiceNum);
        questionChoices.appendChild(radioButton);
    }

    questionCard.appendChild(questionChoices);
    questionForm.appendChild(questionCard);
}

// Generating 20 questions
for (let i = 1; i <= questionsCount; i++) {
    // TODO: create custom questions for each card, each question must be related to mental health
    generateQuestionCard(i);
}

// Adding Submit button
// <input type="button" value="Submit" id="submit-button">
const submitButton = document.createElement('input');
submitButton.type = 'button';
submitButton.value = 'Submit';
submitButton.id = 'submit-button';
const questionForm = document.querySelector('form');
questionForm.appendChild(submitButton);

// Adding functions to our button
const submitFormButton = document.querySelector('#submit-button').addEventListener('click', evaluateForm);

function evaluateForm() {
    let totalScore = 0;
    let healthStatus = '';
    let statusPhotoURL = '';
    let healthStatusMessage = '';

    const statusLevels = ['Optimal Mental Health', 'Mild Mental Health Concerns', 'Moderate Mental Health Challenges', 'Severe Mental Health Disorders', 'Mental Health Crisis'];
    const statusMessages = ['A state of psychological well-being characterized by emotional balance, resilience, and the ability to cope with life\'s challenges effectively.',
        'Minor and manageable emotional or psychological issues that may cause occasional distress but do not significantly impair daily functioning.',
        'Intermediate-level psychological difficulties that may impact daily life, requiring some level of intervention or support for effective management.',
        'Serious and often chronic mental health conditions that substantially disrupt a person\'s thoughts, emotions, and behaviors, typically necessitating comprehensive treatment and professional care.',
        'A critical and acute state of emotional or psychological distress that may pose an immediate risk to a person\'s well - being, often requiring urgent intervention and support.'];

    for (let i = 1; i <= 20; i++) {
        totalScore += getQuestionAnswer(i);
    }


    if (totalScore <= questionsCount) {
        healthStatus = statusLevels[0];
        statusPhotoURL = 'status-photos/levelOne.png';
        healthStatusMessage = statusMessages[0];
    } else if (totalScore > 20 && totalScore <= 40) {
        healthStatus = statusLevels[1];
        statusPhotoURL = 'status-photos/levelTwo.png';
        healthStatusMessage = statusMessages[1];
    } else if (totalScore > 40 && totalScore <= 60) {
        healthStatus = statusLevels[2];
        statusPhotoURL = 'status-photos/levelThree.png';
        healthStatusMessage = statusMessages[2];
    } else if (totalScore > 60 && totalScore <= 80) {
        healthStatus = statusLevels[3];
        statusPhotoURL = 'status-photos/levelFour.png';
        healthStatusMessage = statusMessages[3];
    } else if (totalScore > 80) {
        healthStatus = statusLevels[4];
        statusPhotoURL = 'status-photos/levelFive.png';
        healthStatusMessage = statusMessages[4];
    }

    // Clearing the form before adding results
    const questions = document.querySelector('form');
    questions.innerHTML = '';

    // Adding a container that will tell us our mental health status
    const resultsSection = document.createElement('div');
    resultsSection.className = 'results-section';

    const resultContainer = document.createElement('div');
    resultContainer.className = 'container';

    const score = document.createElement('p');
    score.classList.add('score');
    score.innerText = `${healthStatus}`;

    resultContainer.appendChild(score);

    resultsSection.appendChild(resultContainer);

    // Adding a photo that represents our current health status
    const statusPhoto = document.createElement('img');
    statusPhoto.src = statusPhotoURL;
    statusPhoto.className = 'status-photo';

    resultContainer.appendChild(statusPhoto);

    questions.appendChild(resultsSection);

    // Adding resources container
    const resourcesSection = document.createElement('div');
    resourcesSection.className = 'resources-section';

    const resourcesContainer = document.createElement('div');
    resourcesContainer.className = 'container';

    const resoucesTitle = document.createElement('p');
    resourcesContainer.textContent = `${healthStatusMessage}`;
    resourcesContainer.appendChild(resoucesTitle);

    resourcesSection.appendChild(resourcesContainer);

    questions.appendChild(resourcesSection);
}

function getQuestionAnswer(questionNumber) {
    let qAnswer = [];
    for (let i = 1; i <= 5; i++) {
        qAnswer.push(document.querySelector(`#question-${questionNumber}-choice-${i}`))
    }
    qAnswer = qAnswer.filter((eachChoice) => { return eachChoice.checked === true });
    return Number(qAnswer[0].value);
}