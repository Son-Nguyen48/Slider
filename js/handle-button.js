import createStore from "./store.js";
import displayItem from "./display-item.js";

const slides = createStore();

export function handleNextButton(item, event) {
  event.preventDefault();
  const classListArray = [...item.classList];
  const id = classListArray.find((classItem) => {
    return classItem.startsWith("id");
  });
  const names = slides.map((slide) => slide.name);
  let theNextIdIndex = names.indexOf(id);
  if (theNextIdIndex < names.length - 1) theNextIdIndex++;
  else theNextIdIndex = 0;
  item.classList.remove(id);
  item.classList.add(names[theNextIdIndex]);
  item.style.backgroundImage = `url(${displayItem(item)})`;
}

export function handlePrevButton(item, event) {
  event.preventDefault();
  const classListArray = [...item.classList];
  const id = classListArray.find((classItem) => {
    return classItem.startsWith("id");
  });
  const names = slides.map((slide) => slide.name);
  let thePrevIdIndex = names.indexOf(id);
  if (thePrevIdIndex > 0) thePrevIdIndex--;
  else thePrevIdIndex = names.length - 1;
  item.classList.remove(id);
  item.classList.add(names[thePrevIdIndex]);
  item.style.backgroundImage = `url(${displayItem(item)})`;
}
