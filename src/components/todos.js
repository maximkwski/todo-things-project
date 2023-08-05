export let todos = JSON.parse(localStorage.getItem('todos')) || [];

export function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function getTodos() {
  return todos;
}

export function addTodo(todo) {
  todos.push(todo);
  saveTodos();
}

export function removeTodo(todo) {
  todos = todos.filter(t => t != todo);
  saveTodos();
}

export function clearTodos() {
  todos = [];
  saveTodos();
}