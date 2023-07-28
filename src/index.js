import './style.css';
import header from './components/header';
import sidebar from './components/sidebar';
import footer from './components/footer';

header();
sidebar();
footer();

// const todoList = document.getElementById('todoList');
// const todoInput = document.getElementById('todoInput');
// const addButton = document.getElementById('addButton');

// addButton.addEventListener('click', () => {
//   const todoText = todoInput.value.trim();
//   if (todoText !== '') {
//     const listItem = document.createElement('li');
//     listItem.textContent = todoText;
//     todoList.appendChild(listItem);
//     todoInput.value = '';
//   }
// });

// todoInput.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter') {
//     addButton.click();
//   }
// });
