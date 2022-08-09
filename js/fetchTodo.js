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
                <div class="todo-item-left-priority">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="todo-item-content">
                    <p class="todo-title letter_spacing_small_text">${todo.title}</p>
                    <p class="todo-content gray letter_spacing_small_text">${todo.description}</p>
                    <span class="todo-status gray letter_spacing_small_text">${todo.status}</span>
                    <span class="todo-created gray letter_spacing_small_text">${todo.createdAt}</span>
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
                    <input class="taskName" type="text" placeholder="Task name" value="${todo.title}"/>
                    <input class="taskDescription" type="text" placeholder="Description" value="${todo.description}"/>
                    <input class="taskStatus" type="text" placeholder="Status" value="${todo.status}"/>
                    <input type="date" class="taskDueDate" value="${todo.createdAt}"/>
                    <select name="priority" id="priority">
                      <option value="Select-Priority-for-the-task">
                        Select Priority for the task
                      </option>
                      <option value="Priority 1">Priority 1</option>
                      <option value="Priority 2">Priority 2</option>
                      <option value="Priority 3">Priority 3</option>
                      <option value="Priority 4">Priority 4</option>
                    </select>
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
    //Handle actions in each Task
    const listTask = project.querySelectorAll(".todo-item");
    listTask.forEach((task) => {
      //Delete task when click delete button

      const deleteTaskBtn = task.querySelector(".todo-edit_control-delete");
      deleteTaskBtn.onclick = () => Store.deleteTodo(idTask);

      //Handle actions in edit form

      const editForm = task.lastElementChild;
      const queryEditForm = project1.queryForm.bind(editForm)();
      const taskTodo = task.firstElementChild;
      const taskPriorityNode = taskTodo.firstElementChild.firstElementChild;

      const idTask = Number(task.id);

      //Click Button edit task to open edit form

      const editTaskBtn = task.querySelector(".todo-edit_control-edit");
      editTaskBtn.onclick = () => {
        console.log("go here");
        task.firstElementChild.classList.remove("active");
        task.lastElementChild.classList.add("active");
        queryEditForm.taskName.focus();
        const taskNameValue = queryEditForm.taskName.value;
        queryEditForm.taskName.value = "";
        queryEditForm.taskName.value = taskNameValue;
      };

      //Click task element to open edit form focus and
      //move cursor to the end of task name line

      task.firstElementChild.onclick = () => {
        task.firstElementChild.classList.remove("active");
        task.lastElementChild.classList.add("active");
        queryEditForm.taskName.focus();
        let taskNameValue = queryEditForm.taskName.value;
        queryEditForm.taskName.value = "";
        queryEditForm.taskName.value = taskNameValue;
      };

      queryEditForm.cancelBtn.onclick = () => {
        task.firstElementChild.classList.add("active");
        editForm.classList.remove("active");
      };

      //color Priority Flag

      const priorityIcon = taskPriorityNode.firstElementChild;
      const priority = Array.from(Store.queryPriority(idTask));
      priority[8] = "-";
      const priorityTaskColorId = priority.join("").toLowerCase();
      priorityIcon.id = `${priorityTaskColorId}`;

      //Set Priority of each task when open edit form

      const optionListPriority = Array.from(
        queryEditForm.taskPriority.getElementsByTagName("option")
      );
      optionListPriority.forEach((option) => {
        priority[8] = " ";
        if (option.value === priority.join("")) {
          const selectedAttribute = document.createAttribute("selected");
          option.setAttributeNode(selectedAttribute);
        }
      });

      //Handle Button Edit task when change value in edit form

      queryEditForm.taskName.onkeyup = () =>
        project1.onChangeEditTaskInput.bind(queryEditForm)();
      queryEditForm.taskDescription.onkeyup = () =>
        project1.onChangeEditTaskInput.bind(queryEditForm)();
      queryEditForm.taskStatus.onkeyup = () =>
        project1.onChangeEditTaskInput.bind(queryEditForm)();
      queryEditForm.taskDueDate.onkeyup = () =>
        project1.onChangeEditTaskInput.bind(queryEditForm)();
      queryEditForm.taskPriority.onkeyup = () =>
        project1.onChangeEditTaskInput.bind(queryEditForm)();
      queryEditForm.taskDueDate.onclick = () =>
        project1.onChangeEditTaskInput.bind(queryEditForm)();
      queryEditForm.taskPriority.onclick = () =>
        project1.onChangeEditTaskInput.bind(queryEditForm)();

      // Click confirm edit task handle

      queryEditForm.confirmBtn.onclick = () =>
        Store.updateTodo(editForm, idTask);

      return html;
    });
  });
}
