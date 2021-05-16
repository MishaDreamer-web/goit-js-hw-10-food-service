import menuTemplate from "./templates/templates.hbs";
import menuItems from "./menu.json";

import "./styles.css";
import "./theme-changer.js";

const foodMenuContainer = document.querySelector(".js-menu");
const menuMarkup = makeMenuPage(menuItems);

foodMenuContainer.insertAdjacentHTML("beforeend", menuMarkup);

function makeMenuPage(menuItems) {
  // return menuItems.map(menuTemplate).join("");
  return menuTemplate(menuItems);
}

// Добавляет все на основе своей зборки парселя
