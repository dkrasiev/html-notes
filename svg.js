function main() {
  const selector = "#my-svg";
  const element = document.querySelector(selector);

  if (!element) {
    console.error(`no ${selector} found`);
    return;
  }

  const elementWidth = element.clientWidth;

  const STEP_SIZE = 4;
  const COUNT = elementWidth / STEP_SIZE;

  for (let i = 0; i < COUNT; i++) {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    circle.setAttribute("cx", "50%");
    circle.setAttribute("cy", "50%");
    circle.setAttribute("r", STEP_SIZE * (COUNT - i));
    circle.setAttribute("fill", getRandomColor());

    element.append(circle);
  }
}

function getRandomColor() {
  return (
    "#" +
    new Array(6)
      .fill()
      .map(() => getRandomElement("0123456789abcdef"))
      .join("")
  );
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

main();
