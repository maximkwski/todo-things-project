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

/* PROJECTS */
export let projects = JSON.parse(localStorage.getItem('projects')) || [];

export function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

export function getProjects() {
  return projects;
}

export function addProject(project) {
  projects.push(project);
  saveProjects();
}

export function removeProject(project) {
  projects = projects.filter(t => t != project);
  saveProjects();
}

/* notes */

export let notes = JSON.parse(localStorage.getItem('notes')) || [];

export function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

export function getNotes() {
  return notes;
}

export function addNote(note) {
  notes.push(note);
  saveNotes();
}

export function removeNote(note) {
  notes = notes.filter(n => n != note)
  saveNotes();
}
