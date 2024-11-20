
function Sum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById('result').innerHTML = "Resultaat: " + result;
}


function Minus() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 - num2;
    document.getElementById('result').innerHTML = "Resultaat: " + result;
}


function Multiply() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 * num2;
    document.getElementById('result').innerHTML = "Resultaat: " + result;
}


function Divide() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    
    if (num2 === 0) {
        document.getElementById('result').innerHTML = "Fout: Delen door nul is niet toegestaan!";
    } else {
        var result = num1 / num2;
        document.getElementById('result').innerHTML = "Resultaat: " + result;
    }
}
