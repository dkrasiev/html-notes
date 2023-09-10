import $ from "jquery";
console.log($);

const sectionSelector = "#my-svg-section";
const section = document.querySelector(sectionSelector);

const svgSelector = "svg";
const svg = section.querySelector(svgSelector);

const buttonSelector = "button";
const button = section.querySelector(buttonSelector);

const inputSelector = "input";
const input = section.querySelector(inputSelector);

if (!section) {
  throw `no ${sectionSelector} found`;
}
if (!svg) {
  throw `no ${svgSelector} inside ${sectionSelector} found`;
}
if (!button) {
  throw `no ${buttonSelector} inside ${sectionSelector} found`;
}
if (!input) {
  throw `no ${inputSelector} inside ${sectionSelector} found`;
}

const DEFAULT_STEP_SIZE = 4;
input.value = DEFAULT_STEP_SIZE;
input.addEventListener("change", draw);
button.addEventListener("click", draw);

function draw() {
  svg.childNodes.forEach((c) => c.remove());

  const STEP_SIZE = Number(input.value) || 1;
  const COUNT = svg.clientWidth / STEP_SIZE;

  for (let i = 0; i < COUNT; i++) {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );

    circle.setAttribute("cx", "50%");
    circle.setAttribute("cy", "50%");
    circle.setAttribute("r", STEP_SIZE * (COUNT - i));
    circle.setAttribute("fill", getRandomColor());

    svg.append(circle);
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

draw();
