import './style.css';
import header from './components/header';
import sidebar from './components/sidebar';
import footer from './components/footer';
import form from './components/form';
import defaultlist from './components/defaultList';
import createProject from './components/projects';
import quickNotes from './components/quickNotes';
import { todos, saveTodos, getTodos, addTodo, removeTodo, clearTodos } from './components/todos';
import { displayToDos } from './components/displayToDo';

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
    if (e.target.innerHTML === 'Default List') {
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
    } else if (e.target.innerHTML === 'CREATE TO-DO') {
        document.querySelector('#content').innerHTML = '';
        previousLi.classList.remove('selected');
        e.target.classList.add('selected');
        form();
    } 
})

