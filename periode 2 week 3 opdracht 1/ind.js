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


const products = ["playstation", "xbox", "pc"];
const productList = document.getElementById('productList');


for (let i = 0; i < products.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = products[i];
    productList.appendChild(listItem);
}