const submitFormButton = document.querySelector('#submit-button').addEventListener('click', evaluateForm);
const scoreText = document.querySelector('.score');


function evaluateForm() {

    let totalScore = 0;

    for (let i = 1; i <= 20; i++) {
        totalScore += getQuestionAnswer(i);
    }

    scoreText.innerHTML = `${totalScore}%`;
}

function getQuestionAnswer(questionNumber) {
    const choiceOne = document.querySelector('#question-' + questionNumber + '-choice-1');
    const choiceTwo = document.querySelector('#question-' + questionNumber + '-choice-2');
    const choiceThree = document.querySelector('#question-' + questionNumber + '-choice-3');
    const choiceFour = document.querySelector('#question-' + questionNumber + '-choice-4');
    const choiceFive = document.querySelector('#question-' + questionNumber + '-choice-5');

    const qAnswer = [choiceOne, choiceTwo, choiceThree, choiceFour, choiceFive].filter((eachChoice) => { return eachChoice.checked === true });
    return Number(qAnswer[0].value);
}

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
        radioButton.name = `question-${questionNumber}-choice`;

        if (i == 1) {
            radioButton.checked = true;
        }

        questionChoices.appendChild(choiceNum);
        questionChoices.appendChild(radioButton);
    }

    questionCard.appendChild(questionChoices);
    questionForm.appendChild(questionCard);
}

generateQuestionCard(21);
generateQuestionCard(22);
generateQuestionCard(23);
