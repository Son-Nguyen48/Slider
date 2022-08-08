function handleAddForm(container) {
  this.container = document.querySelector(container);

  this.queryForm = function () {
    return {
      taskName: this.querySelector(".taskName"),
      taskDescription: this.querySelector(".taskDescription"),
      taskDueDate: this.querySelector(".taskDueDate"),
      taskStatus: this.querySelector(".taskStatus"),
      cancelBtn: this.querySelector(".todo_control-cancel_button"),
      confirmBtn: this.querySelector(".todo_control-confirm_button"),
      taskPriority: this.querySelector("#priority")
    };
  };

  this.onChangeTaskName = function (e) {
    const taskNameValue = this.taskName.value.trim();
    if (taskNameValue) {
      this.confirmBtn.classList.add("allowAddTask");
    } else {
      this.confirmBtn.classList.remove("allowAddTask");
    }
  };
}

export default new handleAddForm("#project1");
