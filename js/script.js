import displayItem from "./display-item.js";
import { handleNextButton, handlePrevButton } from "./handle-button.js";

const item = document.querySelector(".item");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

item.style.backgroundImage = `url(${displayItem(item)})`;

next.onclick = (e) => handleNextButton(item, e);
prev.onclick = (e) => handlePrevButton(item, e);
