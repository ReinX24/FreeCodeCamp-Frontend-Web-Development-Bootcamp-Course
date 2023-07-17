const randomNumberButton = document.querySelector('.random-number-button');

function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * 100);
    document.querySelector('.random-number').innerHTML = "Generated Random Number: " + randomNum;
}

randomNumberButton.onclick = generateRandomNumber;