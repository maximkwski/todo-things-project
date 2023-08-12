export default function header() {
    const headerElement = document.getElementById('header');

    const header_h1 = document.createElement('h1');
    header_h1.textContent = "To-Do-Things";
    headerElement.appendChild(header_h1);

    

    return headerElement;
}