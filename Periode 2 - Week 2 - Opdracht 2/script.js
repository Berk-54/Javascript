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

setInterval(moveDiv, 100);
