import { renderNav } from "./components/navbar";
import { renderHome } from "./components/home";
import { renderFooter } from "./components/footer";
import { renderMenu } from "./components/menu";
import { renderAbout } from "./components/about";


const $content = document.getElementById("content");

/* default home page*/
$content.innerHTML = "";
renderNav();
renderHome();
renderFooter();

document.addEventListener("click", (e) => {
  const target = e.target.innerText;
  $content.innerHTML = "";
  console.log(target)
  renderNav();
  if (target === "HOME") renderHome();
  if (target === "MENU" || target === "SEE MENU") renderMenu();
  if (target === "ABOUT") renderAbout();
  /*if (target === "OMAKASE") renderAbout();
  if (target === "CONTACT") renderAbout();*/
  renderFooter();
});
export { $content };
