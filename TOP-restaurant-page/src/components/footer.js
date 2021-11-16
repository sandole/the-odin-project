import { $content } from "../index";
import { createHtmlElement } from "../builders/createHtmlElement.js";

function render() {
  const $footer = document.createElement("footer");
  const $p = createHtmlElement(
    "p",
    null,
    ["golden"],
    "Developed by John Seong"
  );
  $footer.appendChild($p);
  $content.appendChild($footer);
}

export { render as renderFooter };
