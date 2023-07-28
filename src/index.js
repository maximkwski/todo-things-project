import './style.css';
import header from './components/header';
import sidebar from './components/sidebar';
import footer from './components/footer';

header();
sidebar();
footer();

const contentDiv = document.getElementById('content') //main div
/*NAV MENU*/

const sidebarElement = document.createElement('aside');
const navMenu = document.createElement('ul');
const li_default = document.createElement('li');
li_default.textContent = "Default List";
const li_projects = document.createElement('li');
li_projects.textContent = "My Projects";
const li_notes = document.createElement('li');
li_notes.textContent = "Quick Notes";
navMenu.appendChild(li_default);
navMenu.appendChild(li_projects);
navMenu.appendChild(li_notes);
sidebarElement.appendChild(navMenu);

contentDiv.appendChild(sidebarElement);

/* DEFAULT LIST DIV*/
const defaultList = document.createElement('div');
defaultList.classList.add('default-list');

const todoInput = document.createElement('input'); //todo input
todoInput.id = "toDoInput";
todoInput.type = "text";
todoInput.placeholder = "Add a new task";

const addButton = document.createElement('button'); //add button
addButton.id = "addButton";
addButton.textContent = "Add";

const todoList = document.createElement('ul'); // create to do list
todoList.id = "todoList";
defaultList.appendChild(todoList);
defaultList.appendChild(todoInput);
defaultList.appendChild(addButton);


contentDiv.appendChild(defaultList); //add default list to main div

//add to do item to the list
addButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
      const listItem = document.createElement('li');
      listItem.classList.add = 'todo-item';
      listItem.textContent = todoText;
      todoList.appendChild(listItem);
      todoInput.value = '';
    }
  });
  
  todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addButton.click();
    }
  });

