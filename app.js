let buttons = document.querySelectorAll('button');

let randomColor = () => {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// let popped = () => {
//     buttons.background.style.color = #9198e5;
// }

for (let button of buttons) {
    button.addEventListener('click', function () {
        button.style.background = randomColor();
        playSound();
    })

}

function playSound() {
    let sound = document.querySelector('#audio');
    sound.play();
}