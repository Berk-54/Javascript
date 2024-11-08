let isOriginal = true;

function toggleText() {
  const h1 = document.getElementById("title");
  if (isOriginal) {
    h1.innerText = "Goodbye"
  } else {
    h1.innerText = "Hallo daar! Klik ";
  }
  isOriginal = !isOriginal;
}
