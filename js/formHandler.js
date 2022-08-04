function handleAddForm(container) {
  this.container = document.querySelector(container);

  this.queryForm = function () {
    return {
      taskName: this.querySelector(".taskName"),
      taskDescription: this.querySelector(".taskDescription"),
      taskDueDate: this.querySelector(".taskDueDate"),
      cancelBtn: this.querySelector(".todo_control-cancel_button"),
      confirmBtn: this.querySelector(".todo_control-confirm_button")
    };
  };

  this.onChangeTaskName = function (e) {
    if (this.taskName.value.trim()) {
      this.confirmBtn.classList.add("allowAddTask");
    } else {
      this.confirmBtn.classList.remove("allowAddTask");
    }
  };
}

export default new handleAddForm("#project1");
