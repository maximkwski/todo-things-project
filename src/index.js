import './style.css';
import header from './components/header';
import sidebar from './components/sidebar';
import footer from './components/footer';

header();
sidebar();
footer();

const contentDiv = document.getElementById('main') //main div

/* DEFAULT LIST DIV*/
const defaultList = document.createElement('div');
defaultList.classList.add('default-list');

const greetingElement = document.createElement('section'); // greeting element
greetingElement.classList.add('greeting');
const greeting_h2 = document.createElement('h2');
greeting_h2.classList.add('title');
greeting_h2.innerHTML = "Greetings, ";
const greeting_input = document.createElement('input');
greeting_input.type = 'text';
greeting_input.id = 'name';
greeting_input.placeholder = 'Name here';
greeting_h2.appendChild(greeting_input);
greetingElement.appendChild(greeting_h2);
defaultList.appendChild(greetingElement); // add greeting elem

const createToDoElement = document.createElement('section');
createToDoElement.classList.add('create-todo');
const createToDoElement_h3 = document.createElement('h3');
createToDoElement_h3.textContent = 'Create To Do';
createToDoElement.appendChild(createToDoElement_h3);
const todoForm = document.createElement('form');
todoForm.id = 'new-todo-form';
const todoForm_h4 = document.createElement('h4');
todoForm_h4.textContent = "What's on your todo list?";
const todoForm_input = document.createElement('input');
todoForm_input.type = 'text';
todoForm_input.name = 'content';
todoForm_input.id = 'content';
todoForm_input.placeholder = "e.g make a video";
todoForm.appendChild(todoForm_h4);
todoForm.appendChild(todoForm_input);

const optionsDiv = document.createElement('div'); //options div
optionsDiv.classList.add('options');

const label1 = document.createElement('label'); // option business
const label1_input = document.createElement('input');
label1_input.type = 'radio';
label1_input.name = 'category';
label1_input.id = 'category1';
label1_input.value = 'business';
const business_span = document.createElement('span');
business_span.classList.add('bubble');
business_span.classList.add('business');
const business_div = document.createElement('div');
business_div.textContent = 'Business';
label1.appendChild(label1_input);
label1.appendChild(business_span);
label1.appendChild(business_div);
optionsDiv.appendChild(label1);

const label2 = document.createElement('label'); // option personal
const label2_input = document.createElement('input');
label2_input.type = 'radio';
label2_input.name = 'category';
label2_input.id = 'category2';
label2_input.value = 'personal';
const personal_span = document.createElement('span');
personal_span.classList.add('bubble');
personal_span.classList.add('personal');
const personal_div = document.createElement('div');
personal_div.textContent = 'Personal';
label2.appendChild(label2_input);
label2.appendChild(personal_span);
label2.appendChild(personal_div);
optionsDiv.appendChild(label2);

todoForm.appendChild(optionsDiv); // add options div

const submit_btn = document.createElement('input');
submit_btn.type = 'submit';
submit_btn.value = 'Add To Do';
todoForm.appendChild(submit_btn); // add submit btn

createToDoElement.appendChild(todoForm);
defaultList.appendChild(createToDoElement); // add create todo item

const todoListElement = document.createElement('section'); // TODO LIST OF ITEMS
todoListElement.classList.add('todo-list');
const todoListElement_h3 = document.createElement('h3');
todoListElement_h3.textContent = 'To Do List';
todoListElement.appendChild(todoListElement_h3);

const todoList_div = document.createElement('div');
todoList_div.classList.add('list');
todoList_div.id = 'todo-list';

const todoItem = document.createElement('div'); // TODO ITEM
todoItem.classList.add('todo-item');

const todoItem_label = document.createElement('label');
const todoItem_checkbox = document.createElement('input');
todoItem_checkbox.type = 'checkbox';
const todoItem_span = document.createElement('span');
todoItem_span.class = 'bubble';
todoItem_span.class = 'business';
todoItem_label.appendChild(todoItem_checkbox);
todoItem_label.appendChild(todoItem_span);

const todoContent = document.createElement('div'); //TODO ITEM CONTENT
todoContent.classList.add('todo-content');
const todoContent_input = document.createElement('input');
todoContent_input.type = 'text';
todoContent_input.value = 'Make a video';
todoContent_input.setAttribute('readonly', true);
todoContent.appendChild(todoContent_input);

const todoItem_actions = document.createElement('div'); //ACTION BUTTONS
todoItem_actions.classList.add('actions');
const todo_edit = document.createElement('button');
todo_edit.classList.add('edit');
todo_edit.textContent = 'Edit'
const todo_delete = document.createElement('button');
todo_delete.classList.add('delete');
todo_delete.textContent = 'Delete';
todoItem_actions.appendChild(todo_edit);
todoItem_actions.appendChild(todo_delete);

todoItem.appendChild(todoItem_label);
todoItem.appendChild(todoContent);
todoItem.appendChild(todoItem_actions);

todoList_div.appendChild(todoItem);
todoListElement.appendChild(todoList_div);
defaultList.appendChild(todoListElement);
contentDiv.appendChild(defaultList); //add default list to main div

// const todoInput = document.createElement('input'); //todo input
// todoInput.id = "toDoInput";
// todoInput.type = "text";
// todoInput.placeholder = "Add a new task";

// const addButton = document.createElement('button'); //add button
// addButton.id = "addButton";
// addButton.textContent = "Add";

// const todoList = document.createElement('ul'); // create to do list
// todoList.id = "todoList";

// defaultList.appendChild(todoList);
// defaultList.appendChild(todoInput);
// defaultList.appendChild(addButton);

// //add to do item to the list
// addButton.addEventListener('click', () => {
//     const todoText = todoInput.value.trim();
//     if (todoText !== '') {
//       const listItem = document.createElement('li');
//       listItem.classList.add = 'todo-item';
//       listItem.textContent = todoText;
//       todoList.appendChild(listItem);
//       todoInput.value = '';
//     }
//   });
  
//   todoInput.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//       addButton.click();
//     }
//   });

