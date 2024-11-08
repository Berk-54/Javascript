const productPrijs = 60;
const budget = 100;

let productInput = prompt("Hoeveel kost het product dat je wilt kopen?");

productInput = parseFloat(productInput);

if (productInput <= budget) {
    alert("U heeft genoeg geld!");
} else {
    alert("Helaas, te weinig geld");
}
