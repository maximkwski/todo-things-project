import './style.css';
import header from './components/header';
import sidebar from './components/sidebar';
import footer from './components/footer';
import form from './components/form';
import defaultlist from './components/defaultList';
import { todos, saveTodos, getTodos, addTodo, removeTodo, clearTodos } from './components/todos';
import { displayToDos } from './components/displayToDo';

header();
sidebar();
footer();
defaultlist();

document.querySelector('#add-todo').addEventListener('click', e => {
    console.log('hello')
    document.querySelector('#default-list').innerHTML = '';
    form();
})


// getTodos();
// window.addEventListener('load', () => {

    // todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodoForm = document.querySelector('#new-todo-form');

    // newTodoForm.addEventListener('submit', e => {
    //     e.preventDefault();

    //     const todo = {
    //         content: e.target.elements.content.value,
    //         category: e.target.elements.category.value,
    //         done: false,
    //         createdAt: new Date().getTime()

    //     }

    //     todos.push(todo);
    //     localStorage.setItem('todos', JSON.stringify(todos));

    //     e.target.reset();
    //     displayToDos();
    // })
    displayToDos();

// })

// function displayToDos() {
//     const todoList = document.querySelector('#todo-list');
//     todoList.innerHTML = '';

//     todos.forEach(todo => {
//         const todoItem = document.createElement('div'); // TODO ITEM
//         todoItem.classList.add('todo-item');

//         const label = document.createElement('label');
//         const input = document.createElement('input');
//         input.type = 'checkbox';
//         input.checked = todo.done;
//         const span = document.createElement('span');
//         span.classList.add('bubble');
    
//         if (todo.category == 'personal') {
//             span.classList.add('personal');
//         } else {
//             span.classList.add('business');
//         }

//         label.appendChild(input);
//         label.appendChild(span);

//         const content = document.createElement('div'); //TODO ITEM CONTENT
//         content.classList.add('todo-content');
//         const content_input = document.createElement('input');
//         content_input.type = 'text';
//         content_input.value = `${todo.content}`;
//         content_input.setAttribute('readonly', true);
//         content.appendChild(content_input);

//         const actions = document.createElement('div'); //ACTION BUTTONS
//         actions.classList.add('actions');
//         const edit = document.createElement('button');
//         edit.classList.add('edit');
//         edit.textContent = 'Edit'
//         const deleteButton = document.createElement('button');
//         deleteButton.classList.add('delete');
//         deleteButton.textContent = 'Delete';
//         actions.appendChild(edit);
//         actions.appendChild(deleteButton);

//         todoItem.appendChild(label);
//         todoItem.appendChild(content);
//         todoItem.appendChild(actions);

//         todoList.appendChild(todoItem);

//         if (todo.done) {
//             todoItem.classList.add('done');
//         }

//         input.addEventListener('click', e => {
//             todo.done = e.target.checked;
//             localStorage.setItem('todos', JSON.stringify(todos));

//             if (todo.done) {
//                 todoItem.classList.add('done');
//             } else {
//                 todoItem.classList.remove('done');
//             }
//             displayToDos();
//         })

//         edit.addEventListener('click', e => {
//             const input  = content.querySelector('input');
//             input.removeAttribute('readonly');
//             input.focus();
//             input.addEventListener('blur', e => {
//                 input.setAttribute('readonly', true);
//                 todo.content = e.target.value;
//                 localStorage.setItem('todos', JSON.stringify(todos));
//                 displayToDos();
//             })
//         })

//         deleteButton.addEventListener('click', e => {
//             todos = todos.filter(t => t != todo);
//             localStorage.setItem('todos', JSON.stringify(todos));
//             displayToDos();
//         })
//     })

// }

