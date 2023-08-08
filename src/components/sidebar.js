import '../styles/sidebar.css';

export default function sidebar() {
    /*NAV MENU*/

    const sidebarElement = document.querySelector('aside');
    const header_h1 = document.createElement('h1');
    header_h1.textContent = "To-Do-Things";
    sidebarElement.appendChild(header_h1);
    const navMenu = document.createElement('ul');
    const li_default = document.createElement('li');
    li_default.id = 'default';
    const li_default_a = document.createElement('a');
    li_default_a.textContent = 'Default List'
    li_default.appendChild(li_default_a);
    const li_projects = document.createElement('li');
    li_projects.id = 'projects'
    const li_projects_a = document.createElement('a');
    li_projects_a.textContent = 'My Projects';
    li_projects.appendChild(li_projects_a);
    const li_notes = document.createElement('li');
    li_notes.id = 'notes';
    const li_notes_a = document.createElement('a');
    li_notes_a.textContent = 'Quick Notes';
    li_notes.appendChild(li_notes_a);

    navMenu.appendChild(li_default);
    navMenu.appendChild(li_projects);
    navMenu.appendChild(li_notes);
    sidebarElement.appendChild(navMenu);

    const addToDo = document.createElement('button');
    addToDo.id = 'add-todo';
    addToDo.type = 'button';
    addToDo.textContent = 'ADD';
    sidebarElement.appendChild(addToDo);

    return sidebarElement;
}