import handleAddForm from "./formHandler.js";
import Store from "../js/store.js";
import project1 from "../js/formHandler.js";

export default function fetchTodo(listTodo) {
  let html = "";
  listTodo.forEach((todo) => {
    html += `
    <li class="todo-item" id="${todo.id}">
        <div class="todo-item-flex hide">
            <div class="todo-item-left flex">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="todo-item-content">
                    <p class="todo-title letter_spacing_small_text">${todo.todo__Title}</p>
                    <p class="todo-content gray letter_spacing_small_text">${todo.todo_Description}</p>
                    <span class="todo-status gray letter_spacing_small_text">${todo.todo__Status}</span>
                    <span class="todo-created gray letter_spacing_small_text">${todo.todo__CreatedAt}</span>
                </div>
            </div>
            <div class="todo-edit_control">
                <button class="todo-edit_control-edit" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>

                <button class="todo-edit_control-due_date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </button>

                <button class="todo-edit_control-comment">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </button>

                <button class="todo-edit_control-delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="project_list-edit_form hide">
            <div class="edit_form">
                <div class="todo_content">
                    <input class="taskName" type="text" placeholder="Task name" value="${todo.todo__Title}"/>
                    <input class="taskDescription" type="text" placeholder="Description" value="${todo.todo_Description}"/>
                    <input class="taskStatus" type="text" placeholder="Status" value="${todo.todo__Status}"/>
                    <input type="date" class="taskDueDate" value="${todo.todo__CreatedAt}"/>
                </div>
                <div class="todo_edit_control">
                    <button class="todo_control-cancel_button" >Cancel</button>
                    <button class="todo_control-confirm_button">Edit Task</button>
                </div>
            </div>        
        </div>
    </li>
    `;
  });

  const projectList = document.querySelectorAll(".project_list");
  projectList.forEach((project) => {
    project.innerHTML = html;
    const listTask = project.querySelectorAll(".todo-item");
    listTask.forEach((task) => {
      const editTaskBtn = task.querySelector(".todo-edit_control-edit");
      const deleteTaskBtn = task.querySelector(".todo-edit_control-delete");
      const editForm = task.lastElementChild;
      const queryEditForm = project1.queryForm.bind(editForm)();

      queryEditForm.taskName.onkeyup = (e) =>
        project1.onChangeTaskName.bind(queryEditForm)(e);

      const id = Number(task.id);

      // const handleEditTask = project1.handleEditTask;
      queryEditForm.confirmBtn.onclick = (e) =>
        Store.updateTodo(e, editForm, id);

      deleteTaskBtn.onclick = (e) => Store.deleteTodo(e, editForm, id);

      editTaskBtn.onclick = (e) => {
        e.preventDefault();
        console.log("go here");
        task.firstElementChild.classList.remove("active");
        task.lastElementChild.classList.add("active");
      };

      queryEditForm.cancelBtn.onclick = (e) => {
        e.preventDefault();
        task.firstElementChild.classList.add("active");
        editForm.classList.remove("active");
      };

      return html;
    });
  });

  //Handle Edit task
}
