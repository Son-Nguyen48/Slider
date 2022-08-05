import fetchTodo from "../js/fetchTodo.js";

function Store() {
  this.listTodo = [
    {
      id: 1,
      todo__Title: "Go to the Gym",
      todo_Description: "Go to somewhere!",
      todo__Status: "Doing",
      todo__CreatedAt: "2022-02-05",
      priority: "Priority 1",
      color: "$priority-1-color"
    },

    {
      id: 2,
      todo__Title: "Go to the School",
      todo_Description: "Go to somewhere!",
      todo__Status: "Done",
      todo__CreatedAt: "2022-06-01",
      priority: "Priority 3",
      color: "$priority-3-color"
    },

    {
      id: 3,
      todo__Title: "Go to the Hospital",
      todo_Description: "Go to somewhere! ",
      todo__Status: "Doing",
      todo__CreatedAt: "2022-02-08",
      priority: "Priority 3",
      color: "$priority-3-color"
    },

    {
      id: 4,
      todo__Title: "Go to the Supermarket",
      todo_Description: "Go to somewhere!",
      todo__Status: "Done",
      todo__CreatedAt: "2022-04-08",
      priority: "Priority 3",
      color: "$priority-3-color"
    },
    {
      id: 5,
      todo__Title: "Go to the Movie theater",
      todo_Description: "Go to somewhere!",
      todo__Status: "Done",
      todo__CreatedAt: "2022-04-08",
      priority: "Priority 3",
      color: "$priority-3-color"
    },

    {
      id: 6,
      todo__Title: "Go to the Stadium",
      todo_Description: "Go to somewhere!",
      todo__Status: "Done",
      todo__CreatedAt: "2022-04-08",
      priority: "Priority 2",
      color: "$priority-2-color"
    }
  ];

  this.listPriority = [
    {
      id: 1,
      priority: "Priority 1",
      color: "$priority-1-color"
    },
    {
      id: 2,
      priority: "Priority 2",
      color: "$priority-2-color"
    },
    {
      id: 3,
      priority: "Priority 3",
      color: "$priority-3-color"
    },
    {
      id: 4,
      priority: "Priority 4",
      color: "$priority-4-color"
    }
  ];

  return {
    listTodo: this.listTodo,
    addTodo: (e, form) => {
      e.preventDefault();
      const list = this.listTodo;
      list.push({
        id: this.listTodo.length + 1,
        todo__Title: `${form.taskName.value}`,
        todo_Description: `${form.taskDescription.value}`,
        todo__Status: `${form.taskStatus.value}`,
        todo__CreatedAt: `${form.taskDueDate.value}`
      });
      form.taskName.value = "";
      form.taskName.focus();
      form.taskDescription.value = "";
      form.taskStatus.value = "";
      form.taskDueDate.value = "";

      fetchTodo(this.listTodo);
    },
    updateTodo: (e, form, id) => {
      e.preventDefault();
      this.listTodo = this.listTodo.map((task) => {
        if (task.id === id) {
          task.todo__Title = form.querySelector(".taskName").value;
          task.todo_Description = form.querySelector(".taskDescription").value;
          task.todo__Status = form.querySelector(".taskStatus").value;
          task.todo__CreatedAt = form.querySelector(".taskDueDate").value;
        }
        return task;
      });
      fetchTodo(this.listTodo);
    },
    deleteTodo: (e, form, id) => {
      e.preventDefault();
      const taskDeletedIndex = this.listTodo.findIndex(
        (task) => task.id === id
      );
      this.listTodo.splice(taskDeletedIndex, 1);
      fetchTodo(this.listTodo);
    }
  };
}

export default new Store();