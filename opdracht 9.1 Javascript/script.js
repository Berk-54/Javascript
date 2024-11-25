
const modal = document.getElementById('cookieModal');
const showModalBtn = document.getElementById('showModalBtn');
const closeBtn = document.getElementById('closeBtn');
const verifyBtn = document.getElementById('verifyBtn');
const ageInput = document.getElementById('ageInput');


showModalBtn.onclick = function() {
    modal.style.display = 'flex';
}


closeBtn.onclick = function() {
    modal.style.display = 'none';
}


verifyBtn.onclick = function() {
    const age = parseInt(ageInput.value);
    
    if (isNaN(age)) {
        alert("Voer een geldige leeftijd in!");
        return;
    }

    if (age >= 18) {
        window.location.href = "https://www.example.com"; 
    } else {
        document.body.style.backgroundColor = 'red';
        document.body.innerHTML = '<h1 style="color: white; text-align: center;">Helaas, je bent te jong!</h1>';
    }
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
