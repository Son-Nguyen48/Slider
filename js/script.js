<<<<<<< HEAD
import fetchTodo from "../js/fetchTodo.js";
import Store from "../js/store.js";
import project1 from "../js/formHandler.js";

fetchTodo(Store.listTodo);

const addForm = project1.container.querySelector(".add_form");
const queryAddForm = project1.queryForm.bind(addForm)();

queryAddForm.taskName.onkeyup = () =>
  project1.onChangeEditTaskInput.bind(queryAddForm)();

//Open form add Task

const addTaskBtn = project1.container.querySelector(".add_todo_btn");
addTaskBtn.addEventListener("click", () => {
  project1.container
    .querySelector(".project_list-add_todo")
    .classList.remove("active");
  project1.container
    .querySelector(".project_list-add_form")
    .classList.add("active");
  queryAddForm.taskName.focus();
});

//Cancel add Task

queryAddForm.cancelBtn.onclick = (e) => {
  e.preventDefault();
  project1.container
    .querySelector(".project_list-add_todo")
    .classList.add("active");
  project1.container
    .querySelector(".project_list-add_form")
    .classList.remove("active");
};
//Add Task Click
queryAddForm.confirmBtn.onclick = (e) => Store.addTodo(e, queryAddForm);

export default project1;
=======
import displayItem from "./display-item.js";
import { handleNextButton, handlePrevButton } from "./handle-button.js";

const item = document.querySelector(".item");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

item.style.backgroundImage = `url(${displayItem(item)})`;

next.onclick = (e) => handleNextButton(item, e);
prev.onclick = (e) => handlePrevButton(item, e);
>>>>>>> master
