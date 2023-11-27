
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

const intensityCategoryPhotos = {
    'none': 'intensity-photos/1_none.png',
    'mild': 'intensity-photos/2_mild.png',
    'moderate': 'intensity-photos/3_moderate.png',
    'severe': 'intensity-photos/4_severe.png',
    'extremeDistress': 'intensity-photos/5_extreme_distress.png',
}

const frequencyCategoryPhotos = {
    'none': 'frequency-photos/1_none.png',
    'occasionally': 'frequency-photos/2_occasionally.png',
    'often': 'frequency-photos/3_often.png',
    'usually': 'frequency-photos/4_usually.png',
    'allTheTime': 'frequency-photos/5_all_the_time.png',
}

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

    // DONE: after adding the values, place them within a range
    const intensityAverage = intensityValues / testSymptoms.length
    const frequencyAverage = frequencyValues / testSymptoms.length

    let intensityCategory = ''
    let frequencyCategory = ''

    let intensityPhoto = ''
    let frequencyPhoto = ''

    // TODO: Test if photos for intensity and frequency are working properly
    if (intensityAverage == 0.0) {
        intensityCategory = 'None'
        intensityPhoto = intensityCategoryPhotos.none
    } else if (intensityAverage > 0.0 && intensityAverage < 4.0) {
        intensityCategory = 'Mild'
        intensityPhoto = intensityCategoryPhotos.mild
    } else if (intensityAverage >= 4.0 && intensityAverage < 7.0) {
        intensityCategory = 'Moderate'
        intensityPhoto = intensityCategoryPhotos.moderate
    } else if (intensityAverage >= 7.0 && intensityAverage < 10.0) {
        intensityCategory = 'Severe'
        intensityPhoto = intensityCategoryPhotos.severe
    } else if (intensityAverage == 10.0) {
        intensityCategory = 'Extreme distress'
        intensityPhoto = intensityCategoryPhotos.extremeDistress
    }

    // DONE: change frequency to have its own photos
    if (frequencyAverage == 0.0) {
        frequencyCategory = 'None'
        frequencyPhoto = frequencyCategoryPhotos.none
    } else if (frequencyAverage > 0.0 && frequencyAverage < 4.0) {
        frequencyCategory = 'Occasionally'
        frequencyPhoto = frequencyCategoryPhotos.occasionally
    } else if (frequencyAverage >= 4.0 && frequencyAverage < 7.0) {
        frequencyCategory = 'Often'
        frequencyPhoto = frequencyCategoryPhotos.often
    } else if (frequencyAverage >= 7.0 && frequencyAverage < 10.0) {
        frequencyCategory = 'Usually'
        frequencyPhoto = frequencyCategoryPhotos.usually
    } else if (frequencyAverage == 10.0) {
        frequencyCategory = 'All the time'
        frequencyPhoto = frequencyCategoryPhotos.allTheTime
    }

    // console.log(`Intensity Values: ${intensityValues / testSymptoms.length}`)
    // console.log(`Frequency Values: ${frequencyValues / testSymptoms.length}`)

    // Removing unnecessary elements after evaluating form
    document.querySelector('.test-title').innerHTML = ''
    document.querySelector('.scale-card').remove()
    document.querySelector('.question-card').remove()
    document.querySelector('#submit-button').remove()

    generateResults(intensityCategory, frequencyCategory, intensityPhoto, frequencyPhoto)

}

function generateResults(intensityCategory, frequencyCategory, intensityPhoto, frequencyPhoto) {

    // Make the user go to the start of the webpage
    window.scrollTo(0, 0)

    document.querySelector('.test-title').innerHTML = 'Anxiety Symptoms Results'

    const intensityResultsContainer = document.createElement('div')
    intensityResultsContainer.classList.add('results-card')
    intensityResultsContainer.id = 'intensity-result'

    document.querySelector('form').appendChild(intensityResultsContainer)

    const frequencyResultsContainer = document.createElement('div')
    frequencyResultsContainer.classList.add('results-card')
    frequencyResultsContainer.id = 'frequency-result'

    document.querySelector('form').appendChild(intensityResultsContainer)
    document.querySelector('form').appendChild(frequencyResultsContainer)

    document.querySelector('#intensity-result').innerHTML = `
        <h2>Anxiety Intensity: ${intensityCategory}</h2>
        <img src="${intensityPhoto}"></img>
        `

    document.querySelector('#frequency-result').innerHTML = `
        <h2>Anxiety Frequency: ${frequencyCategory}</h2>
        <img src="${frequencyPhoto}"></img>
    `

    const guidesList = document.createElement('div')
    guidesList.classList.add('results-card')
    guidesList.classList.add('guide-card')
    guidesList.innerHTML = `
        <h2>Here are some ways that you could improve your mental health</h2>
        <h2 class="mt-2">Prioritizing self care</h2>
        <img src="../images/self-care.png" class="guide-photo">
        <p class="justify-text mt-2">Establish a daily routine that includes adequate sleep, a balanced diet, regular exercise, and relaxation techniques like meditation or deep breathing. Taking care of your physical health can have a significant impact on your mental well-being.</p>
    
        <h2 class="mt-2">Seek social support</h2>
        <img src="../images/social-support.png" class="guide-photo">
        <p class="justify-text mt-2">Maintain and nurture your social connections. Spend time with friends and family, and don't hesitate to reach out when you need support or someone to talk to. Social relationships can provide emotional support and a sense of belonging.</p>
         
        <h2 class="mt-2">Manage stress</h2>
        <img src="../images/manage-stress.png" class="guide-photo">
        <p class="justify-text mt-2">Develop effective stress management techniques, such as mindfulness, yoga, or progressive muscle relaxation. Identifying the sources of stress in your life and finding healthy ways to cope with them can help reduce anxiety and improve your mental health.</p>
          
        <h2 class="mt-2">Set realistic goals</h2>
        <img src="../images/realistic-goals.png" class="guide-photo">
        <p class="justify-text mt-2">Break down your long-term goals into smaller, achievable steps. This can help you maintain a sense of purpose, motivation, and accomplishment, which are important for mental well-being. Setting realistic expectations for yourself is key to avoiding unnecessary stress and disappointment.</p>
           
        <h2 class="mt-2">Seek professional help</h2>
        <img src="../images/professional-help.png" class="guide-photo">
        <p class="justify-text mt-2">If you're struggling with persistent mental health issues, such as depression, anxiety, or other conditions, consider seeking help from a mental health professional. Therapy, counseling, or medication can be effective in treating a wide range of mental health issues. Don't hesitate to reach out to a mental health expert if needed.</p>
          
    `;

    document.querySelector('form').appendChild(guidesList)

    const professionalsList = document.createElement('div');
    professionalsList.classList.add('results-card')
    professionalsList.innerHTML = `
        <h4>Here are some places where you could find mental health professionals within Dagupan City</h4>
        <ul class="resources-list">
            <li><a href="#">Philippine Mental Health Association</a></li>
            <li><a href="#">Psychiatry & Mental Health Clinic</a></li>
            <li><a href="#">Wundt Psychological Institute</a></li>
            <li><a href="#">The Medical City Clinic @ SM Dagupan</a></li>
        </ul>
    `;

    document.querySelector('form').appendChild(professionalsList)

    const retakeButton = document.createElement('input')
    retakeButton.type = 'button'
    retakeButton.id = 'retake-button'
    retakeButton.value = 'Retake Questionnaire'

    document.querySelector('form').appendChild(retakeButton)

}

document.querySelector('#submit-button').addEventListener('click', evaluateForm);
window.onload = generateTable;