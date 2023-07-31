// window.onresize = () => {
//     document.querySelector('span').textContent = window.innerWidth;
// }

// onload means that the function will execute once all elements have been loaded
// window.onload = () => {
//     document.querySelector('span').textContent = window.innerWidth;
// }

window.onresize = changeWidthText;
window.onload = changeWidthText;

function changeWidthText() {
    document.querySelector('span').textContent = window.innerWidth;
}