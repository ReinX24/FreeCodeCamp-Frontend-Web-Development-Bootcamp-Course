const submitFormButton = document.querySelector('#submit-button').addEventListener('click', evaluateForm);

function evaluateForm() {

    let totalScore = 0;

    totalScore += getQuestionAnswer(1);
    totalScore += getQuestionAnswer(2);
    totalScore += getQuestionAnswer(3);
    totalScore += getQuestionAnswer(4);

    console.log(totalScore)

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