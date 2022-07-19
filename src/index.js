import './style.css';
// JS DOMs
const addProjectbtn = document.querySelector('.btn');
const sideBar = document.querySelector('.side-bar');
class task{
    constructor(name,dueDate,index) {
        this.name = name;
        this.dueDate = dueDate;
        this.index = index;
    }
}
// main storage
let index = [];

addProjectbtn.addEventListener('click',showAddProjectForm);
function showAddProjectForm() {
    sideBar.removeChild(sideBar.lastElementChild);
    const projectForm = document.createElement('div');
    projectForm.classList.add('create-project');
        const projectHeader = document.createElement('div');
        projectForm.appendChild(projectHeader);
            const labelProjectName = document.createElement('label');
            labelProjectName.setAttribute('for','project-name');
            labelProjectName.textContent = 'Project Name';
            projectHeader.appendChild(labelProjectName);

            const inputProjectName = document.createElement('input');
            inputProjectName.setAttribute('id','project-name');
            inputProjectName.setAttribute('type','text');
            projectHeader.appendChild(inputProjectName);
        
        const projectButtons = document.createElement('div');
        projectButtons.classList.add('create-project-btn');
        projectForm.appendChild(projectButtons);
            const addButton = document.createElement('button');
            addButton.setAttribute('type','button');
            addButton.classList.add('add-project');
            addButton.textContent = 'Add';
            projectButtons.appendChild(addButton);

            const cancelButton = document.createElement('button');
            cancelButton.setAttribute('type','button');
            cancelButton.classList.add('cancel-project');
            cancelButton.textContent = 'Cancel';
            projectButtons.appendChild(cancelButton);
    
    sideBar.appendChild(projectForm);
}








// project storage
let projects = [];



