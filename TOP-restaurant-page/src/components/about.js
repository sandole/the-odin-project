import { $content } from "../index";
import { createHtmlElement } from "../builders/createHtmlElement.js";

function render() {
  const $main = document.createElement("main");
  /*$main.classList.add("main");*/

  const $welcome = createHtmlElement(
    "p",
    null,
    ["cursive", "golden"],
    "Welcome"
  );
  const $title = createHtmlElement("h1", null, ["gray"], "Our Story");

  const $hr = document.createElement("hr");

  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod";
  const $p = createHtmlElement("p", null, ["menu-item"], content);

  $main.appendChild($welcome);
  $main.appendChild($title);
  $main.appendChild($hr);
  $main.appendChild($p);

  $content.appendChild($main);
}

export { render as renderAbout };
