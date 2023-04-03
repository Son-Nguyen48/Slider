<<<<<<< HEAD
import fetchTodo from "../js/fetchTodo.js";

function Store() {
  this.listTodo = [
    {
      id: 1,
      title: "Go to the Gym",
      description: "Go to somewhere!",
      status: "Doing",
      createdAt: "2022-02-05",
      priority: "Priority 1",
      color: "#db4c3f"
    },

    {
      id: 2,
      title: "Go to the School",
      description: "Go to somewhere!",
      status: "Done",
      createdAt: "2022-06-01",
      priority: "Priority 3",
      color: "#246fe0"
    },

    {
      id: 3,
      title: "Go to the Hospital",
      description: "Go to somewhere! ",
      status: "Doing",
      createdAt: "2022-02-08",
      priority: "Priority 4",
      color: "#1ca5b8"
    },

    {
      id: 4,
      title: "Go to the Supermarket",
      description: "Go to somewhere!",
      status: "Done",
      createdAt: "2022-04-08",
      priority: "Priority 3",
      color: "#246fe0"
    },
    {
      id: 5,
      title: "Go to the Movie theater",
      description: "Go to somewhere!",
      status: "Done",
      createdAt: "2022-04-08",
      priority: "Priority 2",
      color: "#eb8909"
    },

    {
      id: 6,
      title: "Go to the Stadium",
      description: "Go to somewhere!",
      status: "Done",
      createdAt: "2022-04-08",
      priority: "Priority 1",
      color: "#db4c3f"
    }
  ];

  this.listPriority = [
    {
      id: 1,
      priority: "Priority 1",
      color: "#db4c3f"
    },
    {
      id: 2,
      priority: "Priority 2",
      color: "#eb8909"
    },
    {
      id: 3,
      priority: "Priority 3",
      color: "#246fe0"
    },
    {
      id: 4,
      priority: "Priority 4",
      color: "#1ca5b8"
    }
  ];

  return {
    listTodo: this.listTodo,
    addTodo: (e, form) => {
      e.preventDefault();
      const list = this.listTodo;

      list.push({
        id: this.listTodo.length + 1,
        title: `${form.taskName.value}`,
        description: `${form.taskDescription.value}`,
        status: `${form.taskStatus.value}`,
        createdAt: `${form.taskDueDate.value}`,
        color: `${
          this.listPriority.filter((option) => {
            return option.priority === form.taskPriority.value;
          })[0].color
        }`,
        priority: `${
          this.listPriority.filter((option) => {
            return option.priority === form.taskPriority.value;
          })[0].priority
        }`
      });
      form.taskName.value = "";
      form.taskName.focus();
      form.taskDescription.value = "";
      form.taskStatus.value = "";
      form.taskDueDate.value = "";
      const selectedAttribute = document.createAttribute("selected");
      form.taskPriority.firstElementChild.setAttributeNode(selectedAttribute);

      fetchTodo(this.listTodo);
    },
    updateTodo: (form, id) => {
      this.listTodo = this.listTodo.map((task) => {
        if (task.id === id) {
          task.title = form.querySelector(".taskName").value;
          task.description = form.querySelector(".taskDescription").value;
          task.status = form.querySelector(".taskStatus").value;
          task.createdAt = form.querySelector(".taskDueDate").value;
          task.priority = form.querySelector("#priority").value;
        }
        return task;
      });
      fetchTodo(this.listTodo);
    },
    deleteTodo: (id) => {
      const taskDeletedIndex = this.listTodo.findIndex(
        (task) => task.id === id
      );
      this.listTodo.splice(taskDeletedIndex, 1);
      fetchTodo(this.listTodo);
    },
    queryPriority: (id) => {
      let result = "";
      this.listTodo.forEach((task) => {
        if (task.id === id) {
          result = task.priority;
        }
      });
      return result;
    }
  };
}

export default new Store();
=======
export default function createStore() {
  return [
    {
      id: 1,
      name: "id1",
      url: "https://images.unsplash.com/photo-1558981001-1995369a39cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      name: "id2",
      url: "https://images.unsplash.com/photo-1593558159516-d0be2a960c52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
    },
    {
      id: 3,
      name: "id3",
      url: "https://images.unsplash.com/photo-1598609339507-cc7b3de1cd2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
    },
    {
      id: 4,
      name: "id4",
      url: "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
    }
  ];
}
>>>>>>> master
