var horizontalPos = 0;
var verticalPos = 0;
const redSquare = document.querySelector(".cuadrado-rojo");

function keyDownHandler(e) {
  console.log(e.key);
  switch (e.key) {
    case "ArrowLeft":
      horizontalPos -= 5;
      break;
    case "ArrowUp":
      verticalPos -= 5;
      break;
    case "ArrowRight":
      horizontalPos += 5;
      break;
    case "ArrowDown":
      verticalPos += 5;
      break;
  }
  redSquare.style.left = horizontalPos + "px";
  redSquare.style.top = verticalPos + "px";
}

function main() {
  document.addEventListener("keydown", keyDownHandler, false);
}

main();
