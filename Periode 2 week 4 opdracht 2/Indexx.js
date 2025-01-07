function generateTable() {
    const input = document.getElementById("tableInput").value;

    if (!input || isNaN(input) || input <= 0) {
        alert("Voer een geldig positief getal in!");
        return;
    }
   
    const number = parseInt(input);
    const outputDiv = document.getElementById("output");
    
    outputDiv.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        const line = document.createElement("p");
        line.textContent = `${number} x ${i} = ${result}`;
        outputDiv.appendChild(line);
    }
}