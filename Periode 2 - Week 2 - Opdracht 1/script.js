const movingDiv = document.getElementById('movingDiv');
let position = 0;
const speed = 5;

function moveDiv() {
    position += speed;
    movingDiv.style.left = position + "px";
    if (position > window.innerWidth) {
        position = -50;
    }
}

setInterval(moveDiv, 100);
