function main() {
  const selector = "#my-svg";
  const element = document.querySelector(selector);

  if (!element) {
    console.error(`no ${selector} found`);
    return;
  }

  const svgns = "http://www.w3.org/2000/svg";
  const count = 64;
  const stepSize = 2;
  for (let i = 0; i < count; i++) {
    const shape = document.createElementNS(svgns, "circle");

    shape.setAttribute("cx", "50%");
    shape.setAttribute("cy", "50%");
    shape.setAttribute("r", stepSize * (count - i));
    shape.setAttribute("fill", getRandomColor());

    element.append(shape);
  }
}

const COLORS = ["white", "black", "green", "tomato", "blue", "aqua"];

function getRandomColor() {
  return getRandomElement(COLORS);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

main();
