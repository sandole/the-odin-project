import { $content } from "../index";
import { createHtmlElement } from "../builders/createHtmlElement.js";

function render() {
  const $main = document.createElement("main");

  const $welcome = createHtmlElement(
    "p",
    null,
    ["cursive", "golden"],
    "Welcome"
  );
  const $title = createHtmlElement("h1", null, ["white"], "Moonga Sashimi");
  const $hr = document.createElement("hr");
  const $subtitle = createHtmlElement(
    "p",
    null,
    ["text-center", "white"],
    "Enjoy your Moonga Sashimi Experience"
  );
  const $button = createHtmlElement("button", null, null, "See menu");

  $main.appendChild($welcome);
  $main.appendChild($title);
  $main.appendChild($hr);
  $main.appendChild($subtitle);
  $main.appendChild($button);

  $content.appendChild($main);
}

export { render as renderHome };
