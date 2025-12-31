function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function start() {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach(box => {
    box.style.backgroundColor = randomColor();
    box.style.color = randomColor();
  });
}
