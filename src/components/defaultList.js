export default function defaultlist() {
    const contentDiv = document.getElementById('main') //main div

    /* DEFAULT LIST DIV*/
    const defaultList = document.createElement('div');
    defaultList.classList.add('default-list');
    defaultList.id = 'default-list';

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

}