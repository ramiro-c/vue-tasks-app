var app = new Vue({
  el: "#app",
  data: {
    tasks: [],
    error: false,
    name: "",
    description: "",
    showDescription: false,
    state: false,
  },
  created: function () {
    let tasksLS = JSON.parse(localStorage.getItem("tasks"));
    this.tasks = tasksLS ? tasksLS : [];
  },
  methods: {
    addTask: function () {
      if (this.name === "" || this.description === "") {
        this.error = true;
        return;
      }
      this.tasks.push({
        name: this.name,
        description: this.description,
        showDescription: false,
        state: false,
      });

      this.name = "";
      this.description = "";
      this.error = false;

      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    updateTaskState: function (index) {
      this.tasks[index].state = !this.tasks[index].state;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    showTaskDescription: function (index) {
      this.tasks[index].showDescription = !this.tasks[index].showDescription;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
});
