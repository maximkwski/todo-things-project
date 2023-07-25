import './style.css';
import errski from './print';

const hellodiv = document.createElement('p');
hellodiv.classList.add('hello');
hellodiv.textContent = 'helloooo';
document.body.appendChild(hellodiv);
errski();