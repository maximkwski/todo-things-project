import '../styles/form-and-todolist.css';
import form from './form';

export default function defaultlist() {
    const contentDiv = document.getElementById('content') //content div

    const todoListElement = document.createElement('section'); // TODO LIST OF ITEMS
    todoListElement.classList.add('todo-list');
    const todoListElement_h3 = document.createElement('h3');
    todoListElement_h3.textContent = 'To Do List';
    todoListElement.appendChild(todoListElement_h3);

    const todoList_div = document.createElement('div');
    todoList_div.classList.add('list');
    todoList_div.id = 'todo-list';


    todoListElement.appendChild(todoList_div);
    contentDiv.appendChild(todoListElement); //add default list to main div

    form();

    return contentDiv;
}