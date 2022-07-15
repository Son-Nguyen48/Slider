import createStore from "./store.js";

const slides = createStore();

export default function displayItem(item) {
  const classListArray = [...item.classList];
  const id = classListArray.find((classItem) => {
    return classItem.startsWith("id");
  });

  const slideItem = slides.find((slide) => {
    return slide.name === id;
  });

  return slideItem.url;
}
