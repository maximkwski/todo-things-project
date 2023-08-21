import '../styles/sidebar.css';
import notePng from '../assets/note.png';
import todoPng from '../assets/todo.png';
import projectsPng from '../assets/projects.png';

import { projects } from './todos';

export default function sidebar() {
    /*NAV MENU*/
    const sidebarElement = document.querySelector('aside');
    sidebarElement.innerHTML = '';

    const greetingElement = document.createElement('div'); // greeting element
    greetingElement.classList.add('greeting');
    const greeting_h2 = document.createElement('h2');
    greeting_h2.classList.add('title');
    greeting_h2.innerHTML = "Greetings, ";
    const greeting_input = document.createElement('input');
    greeting_input.type = 'text';
    greeting_input.id = 'name';
    greeting_input.maxLength = 12;
    greeting_input.size = 12;
    greeting_input.placeholder = 'Name here';
    greeting_h2.appendChild(greeting_input);
    greetingElement.appendChild(greeting_h2);
    sidebarElement.appendChild(greetingElement); // add greeting elem

    window.addEventListener('load', () => {
        const nameInput = document.querySelector('#name');

        const username = localStorage.getItem('username') || '';
        nameInput.value = username;

        nameInput.addEventListener('change', e => {
            localStorage.setItem('username', e.target.value);
        })

    })

    /* MENU */
    const navMenu = document.createElement('ul');
    const li_default = document.createElement('li');
    li_default.id = 'default';
    const todoIcon = new Image();
    todoIcon.src = todoPng;
    const li_default_a = document.createElement('a');
    li_default_a.textContent = 'To-Do List';
    li_default.appendChild(todoIcon);
    li_default.appendChild(li_default_a);
    const li_projects = document.createElement('li');
    const li_projectsDiv = document.createElement('div');
    const projectsIcon = new Image();
    projectsIcon.src = projectsPng;
    li_projectsDiv.appendChild(projectsIcon);
    li_projectsDiv.innerHTML += 'My Projects';
    li_projects.id = 'projects';
    li_projects.appendChild(li_projectsDiv);
    const projectsUl = document.createElement('ul');


    projects.forEach(project => {
        const project_li = document.createElement('li');
        project_li.classList.add('project-item');
    
        project_li.textContent = `${project.title}`;
        projectsUl.appendChild(project_li);
    });
    
    li_projects.appendChild(projectsUl);

    // const projectsUl_add = document.createElement('li');
    const addProject = document.createElement('button');
    addProject.id = 'add-project';
    addProject.type = 'button';
    addProject.textContent = 'Add Project';
    li_projects.appendChild(addProject);

    const li_notes = document.createElement('li');
    li_notes.id = 'li-notes';
    const notesIcon = new Image();
    notesIcon.src = notePng;
    const li_notes_a = document.createElement('a');
    li_notes_a.textContent = 'Quick Notes';
    li_notes.appendChild(notesIcon);
    li_notes.appendChild(li_notes_a);

    
    navMenu.appendChild(li_default);
    navMenu.appendChild(li_projects);
    navMenu.appendChild(li_notes);
    sidebarElement.appendChild(navMenu);


    return sidebarElement;
}