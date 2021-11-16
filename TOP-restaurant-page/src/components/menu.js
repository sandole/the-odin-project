import { $content } from "../index";
import { createHtmlElement } from "../builders/createHtmlElement.js";

const menu = [
  {
    name: "Nigiri",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
    price: "20$",
  },
  {
    name: "Sushi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
    price: "20$",
  },
  {
    name: "Love Boat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
    price: "20$",
  },
];

function render() {
  const $main = document.createElement("main");
  $main.classList.add("main");

  const $welcome = createHtmlElement(
    "p",
    null,
    ["cursive", "golden"],
    "Welcome"
  );
  const $title = createHtmlElement("h1", null, ["gray"], "Menu");

  const $hr = document.createElement("hr");

  $main.appendChild($welcome);
  $main.appendChild($title);
  $main.appendChild($hr);

  menu.forEach((item) => {
    const $div = createHtmlElement("div", null, ["menu-item"], null);

    const $name = createHtmlElement("h2", null, ["golden"], item.name);
    const $description = createHtmlElement(
      "p",
      null,
      ["gray"],
      item.description
    );
    const $price = createHtmlElement("h2", null, ["golden"], item.price);
    const $hr = createHtmlElement("hr", null, ["menu-hr"], null);

    $div.appendChild($name);
    $div.appendChild($description);
    $div.appendChild($price);
    $div.appendChild($hr);

    $main.appendChild($div);
  });

  $content.appendChild($main);
}

export { render as renderMenu };
