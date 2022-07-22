import './style.css';
import x from './close-circle.png';
(function(){})();
// JS DOMs
const addProjectbtn = document.querySelector('.btn');
const projectTaskNav = document.querySelector('.project-task');
const createProjectform = document.querySelector('.create-project');
const addTaskbtn = document.querySelector('.task-btn');
const createTaskForm = document.querySelector(".create-task");
const taskList = document.querySelector('.taskList');
const projectList = document.querySelector('.projectList');
const storages = document.querySelectorAll('.storage');
let inputName = document.querySelector('#name');
let inputDue = document.querySelector('#due');
// Task Class
class taskCreate{
    constructor(name,dueDate,index) {
        this.name = name;
        this.dueDate = dueDate;
        this.index = index;
    }
}
// main storage
let index = [];
let indexToday = [];
let indexWeek = []
let storage = {'index':index,
              'indexToday':indexToday,
              'indexWeek':indexWeek,                
}
let currentStorage = 'index';
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
        createTask(storage[currentStorage]);
    })
    cancelButton.addEventListener('click', hideTaskForm);
})();
function createTask(storage) {
    const task = new taskCreate(inputName.value,inputDue.value,index.length);
    storage.unshift(task);
    updateInbox();
    console.log(storage);
}
function updateInbox() {
    refreshIndex();
    addInbox(storage[currentStorage]);
    console.log(storage);
}
function addInbox(storage) {
    storage.forEach( (taskIndex)=> {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');
        taskContainer.setAttribute('id',`${taskIndex.index}`);
            const taskNameContainer = document.createElement('div');
            taskNameContainer.classList.add('task-name');
            taskContainer.appendChild(taskNameContainer);
                const checkBox = document.createElement('input');
                checkBox.setAttribute('type','checkbox');
                checkBox.setAttribute('value',`${taskIndex.index}`);
                taskNameContainer.appendChild(checkBox);

                const taskName = document.createElement('h3');
                taskName.textContent = `${taskIndex.name}`;
                taskNameContainer.appendChild(taskName);
            const taskDueContainer = document.createElement('div');
            taskDueContainer.classList.add('task-date');
            taskContainer.appendChild(taskDueContainer);
                const taskDue = document.createElement('h3');
                taskDue.textContent = `${taskIndex.dueDate}`;
                taskDueContainer.appendChild(taskDue);

                const taskDelete = document.createElement('button');
                taskDelete.classList.add('task-delete');
                taskDelete.setAttribute('value',`${taskIndex.index}`);
                taskDueContainer.appendChild(taskDelete);
                    const taskDeleteImage = document.createElement('img');
                    taskDeleteImage.src = x;
                    taskDelete.appendChild(taskDeleteImage);
                    function deleteListener(event) {
                        deleteTask(event,storage);
                    }
                    taskDelete.addEventListener('click', deleteListener);
        taskList.appendChild(taskContainer);
    });
}
function refreshIndex() {
    while(taskList.childNodes.length != 0) {
        taskList.removeChild(taskList.lastChild);
    }
    reAssignIndex(storage[currentStorage]);
}
function reAssignIndex(storage) {
    let indexNo = 0;
    storage.forEach((child)=> {
        child.index = indexNo;
        indexNo++;
    });
}
function deleteTask(e,storage){
    storage.splice(e.target.parentElement.value,1);
    updateInbox();
    console.log(storage);
};

addProjectbtn.addEventListener('click',showAddProjectForm);
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



