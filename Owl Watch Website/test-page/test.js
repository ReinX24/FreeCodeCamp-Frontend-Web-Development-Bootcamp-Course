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
for (let i = 1; i <= 20; i++) {
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

    for (let i = 1; i <= 20; i++) {
        totalScore += getQuestionAnswer(i);
    }

    const score = document.createElement('p');
    score.classList.add('score');
    questionForm.appendChild(score);
    score.innerHTML = `${totalScore}%`;
}

function getQuestionAnswer(questionNumber) {
    let qAnswer = [];
    for (let i = 1; i <= 5; i++) {
        qAnswer.push(document.querySelector(`#question-${questionNumber}-choice-${i}`))
    }
    qAnswer = qAnswer.filter((eachChoice) => { return eachChoice.checked === true });
    return Number(qAnswer[0].value);
}