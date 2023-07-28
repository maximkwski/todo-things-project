export default function sidebar() {
    const contentDiv = document.getElementById('content');

    const sidebarElement = document.createElement('aside');
    sidebarElement.classList.add('sidebar');
    const sidebar_h3 = document.createElement('h3');
    sidebar_h3.textContent = "Default List";
    const todoInput = document.createElement('input'); //todo input
    todoInput.id = "toDoInput";
    todoInput.type = "text";
    todoInput.placeholder = "Add a new task";

    const addButton = document.createElement('button'); //add button
    addButton.id = "addButton";
    addButton.textContent = "Add";

    const todoList = document.createElement('ul'); // create to do list
    todoList.id = "todoList";

    sidebarElement.appendChild(sidebar_h3);
    sidebarElement.appendChild(todoInput);
    sidebarElement.appendChild(addButton);
    sidebarElement.appendChild(todoList);

    contentDiv.appendChild(sidebarElement);


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



    return sidebarElement;
}