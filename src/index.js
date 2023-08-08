import './style.css';
import header from './components/header';
import sidebar from './components/sidebar';
import footer from './components/footer';
import form from './components/form';
import defaultlist from './components/defaultList';
import projects from './components/projects';
import quickNotes from './components/quickNotes';
import { todos, saveTodos, getTodos, addTodo, removeTodo, clearTodos } from './components/todos';
import { displayToDos } from './components/displayToDo';

header();
sidebar();
footer();
defaultlist();
displayToDos();


const navBar = document.querySelector('aside>ul');
navBar.querySelector('li#default>a').classList.add('selected');
navBar.addEventListener('click', e => {
    const previousLi = navBar.querySelector('li>a.selected');
    if (previousLi && !(e.target.querySelector('li>a'))) {
        console.log('sho')
        previousLi.classList.remove('selected');
    }
    e.target.classList.add('selected');
    if (e.target.innerHTML === 'Default List') {
        document.querySelector('#content').innerHTML = '';
        defaultlist();
        displayToDos();
    } else if (e.target.innerHTML === 'My Projects') {
        document.querySelector('#content').innerHTML = '';
        projects();
    } else if (e.target.innerHTML === 'Quick Notes') {
        document.querySelector('#content').innerHTML = '';
        quickNotes();
    } 
})

document.querySelector('#add-todo').addEventListener('click', e => {
    document.querySelector('#content').innerHTML = '';
    navBar.querySelector('li>a.selected').classList.remove('selected');
    form();
})
