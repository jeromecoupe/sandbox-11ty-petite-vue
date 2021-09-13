import { createApp } from "petite-vue";
import axios from "axios";

createApp({
  todos: [],
  status: "active",
  q: "",
  async init() {
    try {
      const { data } = await axios.get("/api/todos.json");
      this.todos = data;
    } catch (error) {
      console.log(error);
    }
  },
  get filteredTodos() {
    let todos = this.todos;
    if (this.status === "active") {
      todos = todos.filter((todo) => !todo.completed);
    }
    if (this.status === "completed") {
      todos = todos.filter((todo) => todo.completed);
    }
    if (this.q) {
      todos = todos.filter((todo) => todo.title.includes(this.q));
    }
    return todos;
  },
}).mount();
