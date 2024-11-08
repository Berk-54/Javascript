document.addEventListener("DOMContentLoaded", function() {

    let budget = 100;
    let product = 60;

    let resultElement = document.createElement("div");

    if (budget >= product) {
        resultElement.textContent = "U heeft genoeg geld!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Helaas, te weinig geld";
        resultElement.style.color = "red";
    }

    resultElement.style.fontSize = "20px";
    resultElement.style.fontWeight = "bold";

    document.body.appendChild(resultElement);
});
