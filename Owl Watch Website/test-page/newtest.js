
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

    /* 
        <td><input type="number" id="int-${i + 1}" class="intensity-value" value="0" min="0" max="10"></td>
        <td><input type="number" id="freq-${i + 1}" class="freq-value" value="0" min="0" max="10"></td>
    */

    for (let i = 0; i < testSymptoms.length; i++) {
        tableBodyContent += `  
        <tr>
            <td>${testSymptoms[i]}</td>            
            <td>
                <select id="intensity-select-${i + 1}" class="intensity-select">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            <td>
                <select id="frequency-select-${i + 1}" class="frequency-select">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </td>
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
        const eachFreq = document.querySelector(`#intensity-select-${i}`).value;
        const eachIntensity = document.querySelector(`#frequency-select-${i}`).value;

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

    // TODO: after adding the values, place them within a range
    const intensityAverage = intensityValues / testSymptoms.length
    const frequencyAverage = frequencyValues / testSymptoms.length

    if (intensityAverage == 0.0) {
        console.log('None')
    } else if (intensityAverage > 0.0 && intensityAverage < 4.0) {
        console.log('Mild')
    } else if (intensityAverage >= 4.0 && intensityAverage < 7.0) {
        console.log('Moderate')
    } else if (intensityAverage >= 7.0 && intensityAverage < 10.0) {
        console.log('Severe')
    } else if (intensityAverage == 10.0) {
        console.log('Extreme distress')
    }

    if (frequencyAverage == 0.0) {
        console.log('None')
    } else if (frequencyAverage > 0.0 && frequencyAverage < 4.0) {
        console.log('Occasionally')
    } else if (frequencyAverage >= 4.0 && frequencyAverage < 7.0) {
        console.log('Often')
    } else if (frequencyAverage >= 7.0 && frequencyAverage < 10.0) {
        console.log('Usually')
    } else if (frequencyAverage == 10.0) {
        console.log('All the time')
    }

    console.log(`Intensity Values: ${intensityValues / testSymptoms.length}`)
    console.log(`Frequency Values: ${frequencyValues / testSymptoms.length}`)
}

document.querySelector('#submit-button').addEventListener('click', evaluateForm);
window.onload = generateTable;