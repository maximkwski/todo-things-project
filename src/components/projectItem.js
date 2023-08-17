import '../styles/projectItem.css';
import { projects, saveProjects, removeProject } from "./todos";
import { displayProjects } from './projects';

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

    const tasklist = document.createElement('section');
    tasklist.classList.add('task-list');
    tasklist.id = 'task-list';

    console.log(proj.tasks);

    function displayTasks() {
        tasklist.innerHTML = '';

        proj.tasks.forEach(task => {
            const taskItem = document.createElement('div'); //task item
            taskItem.classList.add('task-item');
            
            const label = document.createElement('label'); //task checkbox
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.checked = task.done;
            const span = document.createElement('span');
            span.classList.add('bubble');
        
            if (task.priority == 'low') {
                span.classList.add('low');
            } else if (task.priority == 'medium') {
                span.classList.add('medium');
            } else if (task.priority == 'high') {
                span.classList.add('high');
            }

            label.appendChild(input);
            label.appendChild(span);

            const content = document.createElement('div'); //task content
            content.classList.add('task-content');
            const content_input = document.createElement('input');
            content_input.type = 'text';
            content_input.value = `${task.content}`;
            content_input.setAttribute('readonly', true);
            content.appendChild(content_input);

            const actions = document.createElement('div'); //ACTION BUTTONS
            actions.classList.add('actions');
            const edit = document.createElement('button');
            edit.classList.add('edit');
            edit.textContent = 'Edit'
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.textContent = 'Delete';
            actions.appendChild(edit);
            actions.appendChild(deleteButton);

            taskItem.appendChild(label);
            taskItem.appendChild(content);
            taskItem.appendChild(actions);

            tasklist.append(taskItem);

            if (task.done) {
                taskItem.classList.add('done');
            }

            input.addEventListener('click', e => {
                task.done = e.target.checked;
                saveProjects();
    
                if (task.done) {
                    taskItem.classList.add('done');
                } else {
                    taskItem.classList.remove('done');
                }
                displayTasks();
            })

            edit.addEventListener('click', e => {
                const input  = content.querySelector('input');
                input.removeAttribute('readonly');
                input.focus();
                input.addEventListener('blur', e => {
                    input.setAttribute('readonly', true);
                    task.content = e.target.value;
                    saveProjects();
                    displayTasks();
                })

            })

            deleteButton.addEventListener('click', e => {
                proj.tasks = proj.tasks.filter(t => t != task);
                console.log(proj.tasks);
                saveProjects();
                displayTasks();

            })


            tasklist.appendChild(taskItem);
        });

    }
    displayTasks();


    
    projectDiv.appendChild(project_h2);
    projectDiv.appendChild(project_category);
    projectDiv.appendChild(project_due);
    projectDiv.appendChild(tasklist); //add tasklist to project item

    contentDiv.appendChild(projectDiv); //add project to content div




   //FORM
   const createToDoElement = document.createElement('section');
   createToDoElement.classList.add('create-todo');
   const createToDoElement_h3 = document.createElement('h3');
   createToDoElement_h3.textContent = 'Add Task';
   createToDoElement.appendChild(createToDoElement_h3);
   const todoForm = document.createElement('form');
   todoForm.id = 'new-todo-form';
   const todoForm_h4 = document.createElement('h4');
   todoForm_h4.textContent = "What's on your project list?";
   const todoForm_input = document.createElement('input');
   todoForm_input.required = 'true';
   todoForm_input.type = 'text';
   todoForm_input.name = 'content';
   todoForm_input.id = 'content';
   todoForm_input.placeholder = "e.g make a video";
   todoForm.appendChild(todoForm_h4);
   todoForm.appendChild(todoForm_input);

   const priorityDiv = document.createElement('div');
   priorityDiv.classList.add('priority');
   
   const priority_h3 = document.createElement('h3');
   priority_h3.textContent = 'Priority:'
    priorityDiv.appendChild(priority_h3);

   const priority_labels = document.createElement('div');
   priority_labels.classList.add('priority-labels'); 

   const label1 = document.createElement('label'); // priority low
   const label1_input = document.createElement('input');
   label1_input.required = 'true';
   label1_input.checked = 'true';
    label1_input.type = 'radio';
    label1_input.name = 'priority';
    label1_input.id = 'priority1';
    label1_input.value = 'low';
    const low_span = document.createElement('span');
    low_span.classList.add('bbl');
    low_span.classList.add('low');
    const low_div = document.createElement('div');
    low_div.textContent = 'Low';
    label1.appendChild(label1_input);
    label1.appendChild(low_span);
    label1.appendChild(low_div);
    priority_labels.appendChild(label1);

    const label2 = document.createElement('label'); // priority medium
   const label2_input = document.createElement('input');
    label2_input.type = 'radio';
    label2_input.name = 'priority';
    label2_input.id = 'priority2';
    label2_input.value = 'medium';
    const medium_span = document.createElement('span');
    medium_span.classList.add('bbl');
    medium_span.classList.add('medium');
    const medium_div = document.createElement('div');
    medium_div.textContent = 'Medium';
    label2.appendChild(label2_input);
    label2.appendChild(medium_span);
    label2.appendChild(medium_div);
    priority_labels.appendChild(label2);

    const label3 = document.createElement('label'); // priority high
   const label3_input = document.createElement('input');
    label3_input.type = 'radio';
    label3_input.name = 'priority';
    label3_input.id = 'priority3';
    label3_input.value = 'high';
    const high_span = document.createElement('span');
    high_span.classList.add('bbl');
    high_span.classList.add('high');
    const high_div = document.createElement('div');
    high_div.textContent = 'High';
    label3.appendChild(label3_input);
    label3.appendChild(high_span);
    label3.appendChild(high_div);
    priority_labels.appendChild(label3);

    priorityDiv.appendChild(priority_labels);
    todoForm.appendChild(priorityDiv);

   const submit_btn = document.createElement('input');
    submit_btn.type = 'submit';
    submit_btn.value = 'Add Task';
    todoForm.appendChild(submit_btn); // add submit btn
    
    createToDoElement.appendChild(todoForm);
    contentDiv.appendChild(createToDoElement);

    todoForm.addEventListener('submit', e => {
        e.preventDefault();


        const task = {
            content: e.target.elements.content.value,
            priority: e.target.elements.priority.value,
            done: false,
            createdAt: new Date().getTime()

        }
       

        proj.tasks.push(task);
        saveProjects();
        displayTasks();
        e.target.reset();
    })

    const deleteProject = document.createElement('input');
    deleteProject.type = 'button';
    deleteProject.value = 'Delete Project';
    createToDoElement.appendChild(deleteProject);

    deleteProject.addEventListener('click', e => {
        console.log('clicked')
       removeProject(proj);
       contentDiv.innerHTML = '';
       projectItem(projects[0]);

       displayProjects();
    })


    return contentDiv;
}