
const testSymptoms = [
    '1. Anxiety',
    '2. Nervousness',
    '3. Worrying',
    '4. Irritability',
    '5. Muscle Tension or Tightness',
    '6. Trouble Relaxing',
    '7. Trouble Falling or Staying Asleep </i>(Rate the most troublesome symptom)<i>',
    '8. Fatigue or Lack of Energy',
    '9. Problems with Concentration or Attention',
    '10. Trouble Remembering Things',
    '11. Shortness of Breath, Chest Tightness, or Pain, Pounding/Skipping/Racing Heartbeat <i>(Rate the most troublesome symptom)</i>',
    '12. Stomach Upset, Nausea, Constipation, Diarrea, or Irritable Bowels <i>(Rate the most troublesome symptom)</i>',
    '13. Dizziness, Lightheadedess, Headaches, Trembling or Shakiness <i>Rate the most troublesome symptom</i>',
    '14. Numbness, Tingling, Excessive Sweating, Flushing, or Frequent Urination <i>(Rate the most troublesome symptom)</i>',
    '15. Feeling Restless, Keyed Up, or On Edge',
    '16. Anticipating or Fearing Something Bad Might Happen',
    '17. Trouble Functioning at Home, Work, or Socially Due to Anxiety <i>(Rate the most troublesome symptom)</i>'
]
function generateTable() {
    const tableBody = document.querySelector('#table-body');
    let tableBodyContent = '';

    for (let i = 0; i < testSymptoms.length; i++) {
        tableBodyContent += `  
        <tr>
            <td>${testSymptoms[i]}</td>
            <td><input type="number" id="int-${i + 1}" class="intensity-value" value="0" min="0" max="10"></td>
            <td><input type="number" id="freq-${i + 1}" class="freq-value" value="0" min="0" max="10"></td>
        </tr>
        `
    }

    tableBody.innerHTML += tableBodyContent;
}

function evaluateForm(e) {
    e.preventDefault();
    
    let intensityValues = 0;
    let frequencyValues = 0;
    for (let i = 1; i <= testSymptoms.length; i++) {
        const eachFreq = document.querySelector(`#int-${i}`).value;
        const eachIntensity = document.querySelector(`#freq-${i}`).value;

        if (eachFreq > 10) {
            // Show an error message on screen
            console.log('Frequency must be less than or equal than 10')
            return false;
        }
        if (eachIntensity > 10) {
            console.log('Frequency must be less than or equal than 10')
            return false;
        }

        intensityValues += Number(eachFreq);
        frequencyValues += Number(eachIntensity);
    }

    console.log(intensityValues)
    console.log(frequencyValues)
}

document.querySelector('#submit-form').addEventListener('click', evaluateForm);
window.onload = generateTable;