export default function sidebar() {
    const contentDiv = document.getElementById('main') //main div

    /*NAV MENU*/

    const sidebarElement = document.createElement('aside');
    const navMenu = document.createElement('ul');
    const li_default = document.createElement('li');
    li_default.textContent = "Default List";
    const li_projects = document.createElement('li');
    li_projects.textContent = "My Projects";
    const li_notes = document.createElement('li');
    li_notes.textContent = "Quick Notes";
    navMenu.appendChild(li_default);
    navMenu.appendChild(li_projects);
    navMenu.appendChild(li_notes);
    sidebarElement.appendChild(navMenu);

    contentDiv.appendChild(sidebarElement);

    return sidebarElement;
}