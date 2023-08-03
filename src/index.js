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


//FORM
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


todoListElement.appendChild(todoList_div);
defaultList.appendChild(todoListElement);
contentDiv.appendChild(defaultList); //add default list to main div

let todos;
window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');

    const username = localStorage.getItem('username') || '';
    nameInput.value = username;

    nameInput.addEventListener('change', e => {
        localStorage.setItem('username', e.target.value);
    })

    newTodoForm.addEventListener('submit', e => {
        e.preventDefault();

        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()

        }

        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));

        e.target.reset();
        displayToDos();
    })
    displayToDos();
})

function displayToDos() {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement('div'); // TODO ITEM
        todoItem.classList.add('todo-item');

        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = todo.done;
        const span = document.createElement('span');
        span.classList.add('bubble');
    
        if (todo.category == 'personal') {
            span.classList.add('personal');
        } else {
            span.classList.add('business');
        }

        label.appendChild(input);
        label.appendChild(span);

        const content = document.createElement('div'); //TODO ITEM CONTENT
        content.classList.add('todo-content');
        const content_input = document.createElement('input');
        content_input.type = 'text';
        content_input.value = `${todo.content}`;
        content_input.setAttribute('readonly', true);
        content.appendChild(content_input);

        const actions = document.createElement('div'); //ACTION BUTTONS
        actions.classList.add('actions');
        const edit = document.createElement('button');
        edit.classList.add('edit');
        edit.textContent = 'Edit'
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';
        actions.appendChild(edit);
        actions.appendChild(deleteButton);

        todoItem.appendChild(label);
        todoItem.appendChild(content);
        todoItem.appendChild(actions);

        todoList.appendChild(todoItem);

        if (todo.done) {
            todoItem.classList.add('done');
        }

        input.addEventListener('click', e => {
            todo.done = e.target.checked;
            localStorage.setItem('todos', JSON.stringify(todos));

            if (todo.done) {
                todoItem.classList.add('done');
            } else {
                todoItem.classList.remove('done');
            }
            displayToDos();
        })

        edit.addEventListener('click', e => {
            const input  = content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', e => {
                input.setAttribute('readonly', true);
                todo.content = e.target.value;
                localStorage.setItem('todos', JSON.stringify(todos));
                displayToDos();
            })
        })
    })

}

