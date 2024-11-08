let getalElement = document.getElementById('getal');
let klikKnop = document.getElementById('klik-knop');

let getal = 0;

klikKnop.addEventListener('click', function() {

    getal++;

    if (getal === 10) {
        getal = 0;
    }
    getalElement.textContent = getal;
});
