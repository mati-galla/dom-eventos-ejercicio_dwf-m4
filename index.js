var horizontalPos = 0;
var verticalPos = 0;
const redSquare = document.querySelector(".cuadrado-rojo");

function keyDownHandler(e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
      horizontalPos -= 5;
      break;
    case 38:
      verticalPos -= 5;
      break;
    case 39:
      horizontalPos += 5;
      break;
    case 40:
      verticalPos += 5;
      break;
  }
  redSquare.style.left = horizontalPos + "px";
  redSquare.style.top = verticalPos + "px";
}

function main() {
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
}

main();
