import { projects } from "./todos";
import form from "./form";

export function projectItem(proj) {

    const contentDiv = document.querySelector('#content');

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-item');
    const project_h2 = document.createElement('h2');
    project_h2.textContent = `${proj.title}`;
    const project_category = document.createElement('h3');
    project_category.textContent = `${proj.category}`;
    const project_due = document.createElement('h3');
    project_due.textContent = `Due: ${proj.dueDate}`;
    
    projectDiv.appendChild(project_h2);
    projectDiv.appendChild(project_category);
    projectDiv.appendChild(project_due);
   contentDiv.appendChild(projectDiv);
   form();

    return contentDiv;
}