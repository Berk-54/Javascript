
let outputDiv = document.getElementById('output');
let text = "Leren programmeren is leuk en uitdagend!";

for(let i = 1; i <= 100; i++) {
    let div = document.createElement('div');
    div.className = 'repeated-text';
    div.textContent = `${i}. ${text}`;
    outputDiv.appendChild(div);
}