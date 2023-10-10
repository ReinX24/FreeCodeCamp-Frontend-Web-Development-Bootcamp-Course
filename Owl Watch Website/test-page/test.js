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