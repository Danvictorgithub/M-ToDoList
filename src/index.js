import './style.css';
// JS DOMs
const addProjectbtn = document.querySelector('.btn');
const sideBar = document.querySelector('.side-bar');
const projectTaskNav = document.querySelector('.project-task');
const createProjectform = document.querySelector('.create-project');
const addTaskbtn = document.querySelector('.task-btn');
const createTaskForm = document.querySelector(".create-task");

let inputName = document.querySelector('#name');
let inputDue = document.querySelector('#due');

class taskCreate{
    constructor(name,dueDate,index) {
        this.name = name;
        this.dueDate = dueDate;
        this.index = index;
    }
}
// main storage
let index = [];





addTaskbtn.addEventListener('click',showTaskForm);
function showTaskForm() {
    addTaskbtn.style.display = 'none';
    createTaskForm.style.display = 'flex';
}
function hideTaskForm() {
    addTaskbtn.style.display = 'flex';
    createTaskForm.style.display = 'none';
}
(function taskDOM() {
    const addButton = document.querySelector('.add');
    const cancelButton = document.querySelector('.cancel');
    
    addButton.addEventListener('click', ()=>{
        createTask();
    })
    cancelButton.addEventListener('click', hideTaskForm);
})();
function createTask() {
    const task = new taskCreate(inputName.value,inputDue.value,index.length);
    index.unshift(task);
    console.log(index);
}
addProjectbtn.addEventListener('click',showAddProjectForm);
// function showAddProjectForm() {
//     hideAddProjectbtn();
//     const projectForm = document.createElement('div');
//     projectForm.classList.add('create-project');
//         const projectHeader = document.createElement('div');
//         projectForm.appendChild(projectHeader);
//             const labelProjectName = document.createElement('label');
//             labelProjectName.setAttribute('for','project-name');
//             labelProjectName.textContent = 'Project Name';
//             projectHeader.appendChild(labelProjectName);

//             const inputProjectName = document.createElement('input');
//             inputProjectName.setAttribute('id','project-name');
//             inputProjectName.setAttribute('type','text');
//             projectHeader.appendChild(inputProjectName);
        
//         const projectButtons = document.createElement('div');
//         projectButtons.classList.add('create-project-btn');
//         projectForm.appendChild(projectButtons);
//             const addButton = document.createElement('button');
//             addButton.setAttribute('type','button');
//             addButton.classList.add('add-project');
//             addButton.textContent = 'Add';
//             projectButtons.appendChild(addButton);

//             const cancelButton = document.createElement('button');
//             cancelButton.setAttribute('type','button');
//             cancelButton.classList.add('cancel-project');
//             cancelButton.textContent = 'Cancel';
//             projectButtons.appendChild(cancelButton);
//     sideBar.appendChild(projectForm);
// }
function showAddProjectForm() {
    hideAddProjectbtn();
    createProjectform.style.display = 'flow';
}
function showAddProjectbtn() {
    projectTaskNav.style.display = 'flow';
    createProjectform.style.display = 'none';
}
function hideAddProjectbtn() {
    projectTaskNav.style.display = 'none';
}
(function projectDOM() {
    const addButton = document.querySelector('.add-project');
    const cancelButton = document.querySelector('.cancel-project'); 
    cancelButton.addEventListener('click', showAddProjectbtn);
})();








// project storage
let projects = {};



