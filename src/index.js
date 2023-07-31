import './style.css';
import header from './components/header';
import sidebar from './components/sidebar';
import footer from './components/footer';

header();
sidebar();
footer();

const contentDiv = document.getElementById('content') //main div

const greetingElement = document.createElement('section'); // greeting element
greetingElement.classList.add('greeting');
const greeting_h2 = document.createElement('h2');
greeting_h2.classList.add('title');
greeting_h2.innerHTML = "Greetings, ";
const greeting_input = document.createElement('input');
greeting_input.type = 'text';
greeting_input.id = 'name';
greeting_input.placeholder = 'Name here';
greeting_h2.innerHTML += greeting_input;
greetingElement.appendChild(greeting_h2);
contentDiv.appendChild(greetingElement);



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

