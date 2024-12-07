let winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
document.getElementById("product-count").innerText = `Aantal producten in winkelmandje: ${winkelmandje.length}`;
document.getElementById("product-list").innerText = `Uw producten zijn: ${winkelmandje.join(", ")}`;
document.getElementById("fourth-product").innerText = `${winkelmandje[3]}, staat op de vierde plek in uw winkelmand.`;

let updatedWinkelmandje = [...winkelmandje];
updatedWinkelmandje[1] = "Bier";
document.getElementById("updated-product").innerText = `Gewijzigd product: ${updatedWinkelmandje.join(", ")}`;

function addProduct() {
  winkelmandje.push("Appels");
  document.getElementById("array-after-add").innerText = `Nieuwe winkelmandje: ${winkelmandje.join(", ")}`;
}

if (winkelmandje.length > 1) {
  document.getElementById("check-products").innerText = `Alle producten: ${winkelmandje.join(", ")}`;
} else {
  document.getElementById("check-products").innerText = "U heeft niet genoeg producten om te tonen.";
}

if (winkelmandje[4] === "Drop") {
  document.getElementById("check-drop").innerText = `Alle producten: ${winkelmandje.join(", ")}`;
} else {
  document.getElementById("check-drop").innerText = "U heeft geen drop.";
}

document.getElementById("spaced-products").innerText = `Met spaties: ${winkelmandje.join(" ")}`;

let oudeWinkelmandje = [...winkelmandje];
winkelmandje.splice(0, 2);
document.getElementById("old-new-array").innerText = `Oude winkelmand: ${oudeWinkelmandje.join(", ")} | Nieuwe winkelmand: ${winkelmandje.join(", ")}`;

winkelmandje.sort();
document.getElementById("sorted-products").innerText = `Gesorteerd winkelmandje: ${winkelmandje.join(", ")}`;
