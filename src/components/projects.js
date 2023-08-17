import '../styles/projects.css';
import { projects, addProject } from './todos';
import { displayProjectItem } from '..';

export function displayProjects() {
   const projectList = document.querySelector('#projects>ul');
   projectList.innerHTML = '';

   projects.forEach(project => {
    const project_li = document.createElement('li');
    project_li.classList.add('project-item');

    project_li.textContent = `${project.title}`;
    projectList.appendChild(project_li);
    });

    displayProjectItem();

}

export default function createProject() {
    const contentDiv = document.querySelector('#content');

    const projectsDiv = document.createElement('section');
    projectsDiv.classList.add('create-project');
    const projects_h3 = document.createElement('h3');
    projects_h3.textContent = 'Create Project';
    projectsDiv.appendChild(projects_h3);

    //form
    const projectForm = document.createElement('form');
    projectForm.id = 'project-form';
    const projectForm_h4 = document.createElement('h4');
    projectForm_h4.textContent = "What's your project's title?";
    const projectForm_input = document.createElement('input');
    projectForm_input.required = 'true';
    projectForm_input.type = 'text';
    projectForm_input.name = 'title';
    projectForm_input.id = 'title';
    projectForm_input.placeholder = "e.g birthday party planning";
    projectForm.appendChild(projectForm_h4);
    projectForm.appendChild(projectForm_input);

    //options
    const optionsDiv = document.createElement('div'); //options div
    optionsDiv.classList.add('options');

    const label1 = document.createElement('label'); // option business
    const label1_input = document.createElement('input');
    label1_input.checked = 'true';
    label1_input.type = 'radio';
    label1_input.name = 'category';
    label1_input.id = 'category1';
    label1_input.value = 'business';
    const business_span = document.createElement('span');
    business_span.classList.add('bubble');
    business_span.classList.add('business');
    const business_div = document.createElement('div');
    business_div.textContent = 'Business';
    label1.appendChild(label1_input);
    label1.appendChild(business_span);
    label1.appendChild(business_div);
    optionsDiv.appendChild(label1);

    const label2 = document.createElement('label'); // option personal
    const label2_input = document.createElement('input');
    label2_input.type = 'radio';
    label2_input.name = 'category';
    label2_input.id = 'category2';
    label2_input.value = 'personal';
    const personal_span = document.createElement('span');
    personal_span.classList.add('bubble');
    personal_span.classList.add('personal');
    const personal_div = document.createElement('div');
    personal_div.textContent = 'Personal';
    label2.appendChild(label2_input);
    label2.appendChild(personal_span);
    label2.appendChild(personal_div);
    optionsDiv.appendChild(label2);

    projectForm.appendChild(optionsDiv); // add options div

    //DUE DATE DIV
    const dueDate = document.createElement('div');
    dueDate.classList.add('due-date');
    dueDate.id = 'due-date';
    const dueDate_label = document.createElement('label');
    dueDate_label.for = 'dueDate';
    dueDate_label.textContent = 'Due:';
    const dueDate_input = document.createElement('input');
    dueDate_input.required = 'true';
    dueDate_input.type = 'date';
    dueDate_input.id = 'dueDate';
    dueDate_input.name = 'dueDate';
    dueDate.appendChild(dueDate_label);
    dueDate.appendChild(dueDate_input);

    projectForm.appendChild(dueDate); //add due-date

    //SUBMIT PROJECT
    const submit_btn = document.createElement('input');
    submit_btn.type = 'submit';
    submit_btn.value = 'Create a Project';
    projectForm.appendChild(submit_btn); // add submit btn

    projectForm.addEventListener('submit', e => {
        e.preventDefault();

        const project = {
            title: e.target.elements.title.value,
            category: e.target.elements.category.value,
            tasks: [],
            dueDate: e.target.elements.dueDate.value,
            createdAt: new Date().getTime()
        }

        addProject(project);
        displayProjects();
        e.target.reset();
    })




    projectsDiv.appendChild(projectForm);
    contentDiv.appendChild(projectsDiv);
}