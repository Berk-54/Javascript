const movingDiv = document.getElementById('movingDiv');
let position = 0;
let direction = 1;
const speed = 5;

function moveDiv() {
    position += speed * direction;
    movingDiv.style.left = position + "px";

    if (position > window.innerWidth - 50 || position < 0) {
        direction *= -1;
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

movingDiv.addEventListener("click", () => {
    movingDiv.style.backgroundColor = getRandomColor();
});

setInterval(moveDiv, 100);
