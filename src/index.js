import menuTemplate from "./templates/templates.hbs";
import menuItems from "./menu.json";

import "./styles.css";

const foodMenuContainer = document.querySelector(".js-menu");
const menuMarkup = makeMenuPage(menuItems);

foodMenuContainer.insertAdjacentHTML("beforeend", menuMarkup);

function makeMenuPage(menuItems) {
  return menuItems.map(menuTemplate).join("");
}
