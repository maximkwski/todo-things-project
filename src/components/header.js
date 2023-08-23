import headerPng from '../assets/logo-header.png';

export default function header() {
    const headerElement = document.getElementById('header');

    const burgerMenu = document.createElement('div');
    burgerMenu.classList.add('burger-menu');
    burgerMenu.id = 'burger';
    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('span');
        bar.classList.add('bar');
        burgerMenu.appendChild(bar);
    }

    const headerIcon = new Image();
    headerIcon.src = headerPng;
    const header_h1 = document.createElement('h1');
    header_h1.textContent = "To-Do-Things";
    const headerLogo = document.createElement('div');
    headerLogo.classList.add('header-logo');
    headerLogo.appendChild(headerIcon);
    headerLogo.appendChild(header_h1);

    headerElement.appendChild(burgerMenu);
    headerElement.appendChild(headerLogo);

    burgerMenu.addEventListener("click", () => {
        const sideBar = document.querySelector('aside');
        sideBar.classList.toggle("active");
        burgerMenu.classList.toggle("burg-active")
    });

    

    return headerElement;
}