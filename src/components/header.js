import headerPng from '../assets/logo-header.png';

export default function header() {
    const headerElement = document.getElementById('header');

    const headerIcon = new Image();
    headerIcon.src = headerPng;
    const header_h1 = document.createElement('h1');
    header_h1.textContent = "To-Do-Things";
    headerElement.appendChild(headerIcon);
    headerElement.appendChild(header_h1);

    

    return headerElement;
}