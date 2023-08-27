function main() {
  const selector = "#my-section";
  const section = document.querySelector(selector);

  if (!section) {
    console.error(`no ${selector} found`);
    return;
  }

  // print dataset in element
  Object.entries(section.dataset).forEach(([k, v]) => {
    const div = document.createElement("code");
    div.style.display = "block";
    div.innerHTML = `<b><i>${k}:</i></b> ${v}`;
    section.append(div);
  });

  const { elem, content, style, count = "1" } = section.dataset;

  if (!elem) {
    console.error(`no elem found`);
    return;
  }

  // print elements based on dataset
  for (let i = 0; i < Number(count); i++) {
    const element = document.createElement(elem);

    if (style) {
      try {
        const customStyles = JSON.parse(style);
        Object.entries(customStyles).forEach(([k, v]) =>
          element.style.setProperty(k, v)
        );
      } catch (_e) {
        console.error(`failed to parse ${style}`);
      }
    }

    if (content) {
      element.innerText = content;
    } else {
      console.error("no content found");
    }

    section.append(element);
  }
}

function filterProperties(object, properties) {
  return Object.entries(object)
    .filter(([k]) => properties.includes(k))
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
}

main();
