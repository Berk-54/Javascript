const closedFaceDiv = document.querySelector('.closed');
const openFaceDiv = document.querySelector('.open');

function closedFace() {
    if (closedFaceDiv.classList.contains('closed')) {
        openFaceDiv.classList.add('active');
        closedFaceDiv.classList.remove('active');
    }
}

function openFace() {
    if (openFaceDiv.classList.contains('open')) {
        closedFaceDiv.classList.add('active');
        openFaceDiv.classList.remove('active');
    }
}
