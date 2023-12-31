import './style.css';
import header from './components/header';
import sidebar from './components/sidebar';
import footer from './components/footer';
import defaultlist from './components/defaultList';
import createProject from './components/projects';
import quickNotes from './components/quickNotes';
import { displayToDos } from './components/displayToDo';
import { projectItem } from './components/projectItem';
import { projects } from './components/todos';

header();
sidebar();
footer();
defaultlist();
displayToDos();


/* NAV BAR */
const navBar = document.querySelector('aside>ul');
navBar.querySelector('li#default>a').classList.add('selected');
navBar.addEventListener('click', e => {
    
    const previousLi = document.querySelector('.selected');
    if (e.target.innerHTML === 'To-Do List') {
        document.querySelector('#content').innerHTML = '';
        previousLi.classList.remove('selected');
        e.target.classList.add('selected');
        defaultlist();
        displayToDos();
    } else if (e.target.innerHTML === 'Quick Notes') {
        document.querySelector('#content').innerHTML = '';
        previousLi.classList.remove('selected');
        e.target.classList.add('selected');
        quickNotes();
    } else if (e.target.innerHTML === 'Add Project') {
        document.querySelector('#content').innerHTML = '';
        previousLi.classList.remove('selected');
        e.target.classList.add('selected');
        createProject();
    }

})

//DISPLAY PROJECT
export function displayProjectItem() {
    const projectList = document.querySelector('#projects>ul').children;
    for (let i = 0; i < projectList.length; i++) {
        projectList[i].addEventListener('click', e => {
            const previousLi = document.querySelector('.selected');
            previousLi.classList.remove('selected');
            projectList[i].classList.add('selected');
            document.querySelector('#content').innerHTML = '';
            
            projectItem(projects[i]);
        })
    }
    
}
document.addEventListener('DOMContentLoaded', displayProjectItem);