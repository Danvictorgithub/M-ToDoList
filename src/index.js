import './style.css';
import x from './close-circle.png';
import isToday from 'date-fns/isToday';
import isPast from 'date-fns/isPast';
(function(){})();
// JS DOMs
const addProjectbtn = document.querySelector('.btn');
const projectTaskNav = document.querySelector('.project-task');
const createProjectform = document.querySelector('.create-project');
const addTaskbtn = document.querySelector('.task-btn');
const createTaskForm = document.querySelector(".create-task");
const taskList = document.querySelector('.taskList');
const projectList = document.querySelector('.projectList');
let currentTabHeader = document.querySelector('.current-tab');
let projectName = document.querySelector('#project-name');

let inputName = document.querySelector('#name');
let inputDue = document.querySelector('#due');
let projectCounter = 0;
// Task Class
class taskCreate{
    constructor(name,dueDate,index) {
        this.name = name;
        this.dueDate = dueDate;
        this.index = index;
    }
}
// main storage
// let index = ['index'];
// let indexToday = ['today'];
// let indexWeek = ['week'];
let index = [];
let indexToday = [];
let indexWeek = [];
let storage = {'index':index,
              'indexToday':indexToday,
              'indexWeek':indexWeek,              
}
// Storage Manipulation
let currentStorage = 'index';
function currentTab() {
    currentTabHeader.textContent = `${currentStorage}`;
}
(function getLocalStorage() {
    if (localStorage.length != 0) {
        for (let store in storage) delete storage[store];
        let parsedlocalStorage = {};
        for (let i=0;i < localStorage.length;i++) {
            let key = localStorage.key(i);
            let value = JSON.parse(localStorage[localStorage.key(i)]);
            parsedlocalStorage[key] = value;
    }
        let sortedStorage = {'index':parsedlocalStorage['index'],
                         'indexToday':parsedlocalStorage['indexToday'],
                         'indexWeek':parsedlocalStorage['indexWeek']                 
                        }
        delete parsedlocalStorage['index'];
        delete parsedlocalStorage['indexWeek'];
        delete parsedlocalStorage['indexToday'];
        projectCounter += Object.keys(parsedlocalStorage).length;
        console.log(projectCounter);
        let finalStorage = Object.assign({},sortedStorage,parsedlocalStorage);
        storage = finalStorage;
        console.log('Local Storage is not Empty');
    } else {
        console.log('Local Storage is Empty');
    }
})();
// Task Button SHOW/HIDE Functions
addTaskbtn.addEventListener('click',showTaskForm);
function taskbtnToggle() {
    if (currentStorage == 'indexToday' || currentStorage == 'indexWeek'){
        hidetaskbtn();
        createTaskForm.style.display = 'none';
    } else {
        showTaskbtn();
    }
}
function showTaskForm() {
    addTaskbtn.style.display = 'none';
    createTaskForm.style.display = 'flex';
}
function hideTaskForm() {
    addTaskbtn.style.display = 'flex';
    createTaskForm.style.display = 'none';
}
function refreshStorage() {
    const storages = document.querySelectorAll('.storage');
    storages.forEach((child) => {
        child.addEventListener('click',changeStorage);
    });
};
refreshStorage();
function hidetaskbtn() {
    addTaskbtn.style.display = 'none';
}
function showTaskbtn() {
    addTaskbtn.style.display = 'flex';
}
// changeStorage based on Selected div
function changeStorage() {
    currentStorage = `${this.getAttribute('value')}`;
    console.log(storage);
    const addButton = document.querySelector('.add');
    addButton.removeEventListener('click', createTaskHandler);
    createTaskForm.style.display = 'none';
    taskDOM();
    updateInbox(storage[currentStorage]);
    taskbtnToggle();
    currentTab();
}
updateInbox(storage[currentStorage]);
// Task Creation Functions
function taskDOM() {
    const addButton = document.querySelector('.add');
    const cancelButton = document.querySelector('.cancel');
    addButton.addEventListener('click', createTaskHandler);
    cancelButton.addEventListener('click', hideTaskForm);
}
function createTaskHandler() {
    createTask(storage[currentStorage]);
}
taskDOM();
// storage is object
// Initialize task and assigns it to respective storage
function createTask(storage) {
    const task = new taskCreate(inputName.value,inputDue.value,index.length);
    storage.unshift(task);
    updateToday();
    updateWeek();
    updateInbox(storage);
    updateLocalStorage();
}
function updateToday() {
    indexToday.forEach( (object) => {
        indexToday.pop();
    });
    index.forEach( (object) => {
        console.log(object.dueDate);
        if (isToday(new Date(object.dueDate))) {
            indexToday.unshift(object);
        }   
    });
}
function updateWeek() {
    indexWeek.forEach( (object) => {
        indexWeek.pop();
    });
    index.forEach( (object) => {
        console.log(object.dueDate);
        if ( (!(isToday(new Date(object.dueDate)))) && (!(isPast(new Date(object.dueDate)))) ) {
            indexWeek.unshift(object);
        }   
    });
}
// Checks taskList and updates based on Storage or Changes/Deletion
function updateInbox(storage) {
    refreshIndex(storage);
    addInbox(storage);
}
function addInbox(storage) {
    function deleteListener(event) {
        deleteTask(event,storage);
    }
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
                if (!(currentStorage == 'indexToday' || currentStorage == 'indexWeek')){
                    const taskDelete = document.createElement('button');
                    taskDelete.classList.add('task-delete');
                    taskDelete.setAttribute('value',`${taskIndex.index}`);
                    taskDueContainer.appendChild(taskDelete);
                    const taskDeleteImage = document.createElement('img');
                    taskDeleteImage.src = x;
                    taskDelete.appendChild(taskDeleteImage);
                    
                    taskDelete.addEventListener('click', deleteListener);
                }
        taskList.appendChild(taskContainer);
    });
}
function refreshIndex() {
    while(taskList.childNodes.length != 0) {
        taskList.removeChild(taskList.lastChild);
    }
    reAssignIndex();
}
function reAssignIndex() {
    let indexNo = 0;
    storage[currentStorage].forEach((child)=> {
        child.index = indexNo;
        indexNo++;
    });
}
function deleteTask(e,storage){
    storage.splice(e.target.parentElement.value,1);
    projectCounter--;
    updateInbox(storage);
    updateToday();
    updateWeek();
    updateLocalStorage();
    console.log(storage);
};
// Project SHOW/HIDE Functions
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
function projectDOM() {
    const addButton = document.querySelector('.add-project');
    const cancelButton = document.querySelector('.cancel-project'); 
    cancelButton.addEventListener('click', showAddProjectbtn);
    addButton.addEventListener('click', addProjectObject);
};
projectDOM();

function addProjectObject() {
    if (!(projectName.value in storage)) {
        storage[projectName.value] = [];
        projectCounter++;
        console.log(Object.keys(storage)[2+projectCounter]);
        updateProjectList();
        updateLocalStorage();
    }
}
function refreshProjectList() {
    while(projectList.childNodes.length != 0) {
        projectList.removeChild(projectList.lastChild);
    }
}
function updateProjectList() {
    refreshProjectList();
    const projectNodes = Object.keys(storage).slice(3,3+projectCounter);
    console.log(projectNodes);
    projectNodes.forEach( (project) => {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project');
        projectContainer.classList.add('storage');
        projectContainer.setAttribute('value',`${project}`);
        const projectHeaderName = document.createElement('h3');
        projectHeaderName.textContent = `${project}`;
        projectContainer.appendChild(projectHeaderName);

        const projectRemoveButton = document.createElement('button');
        projectRemoveButton.classList.add('remove-project');
        const projectRemoveButtonImage = document.createElement('img');
        projectRemoveButtonImage.src = x;
        projectRemoveButton.appendChild(projectRemoveButtonImage);
        projectContainer.appendChild(projectRemoveButton);
        projectRemoveButton.addEventListener('click',deleteProject);
    projectList.appendChild(projectContainer);
    });
    refreshStorage();
    updateLocalStorage();
}
function deleteProject(e) {
    delete storage[this.parentElement.getAttribute('value')];
    console.log(this.parentElement.getAttribute('value'));
    currentStorage = 'index';
    updateProjectList();
    updateLocalStorage();
    e.stopPropagation();   
}
updateProjectList();
// Check if local storage is available
// type is JSON/Object
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
function updateLocalStorage() {
    localStorage.clear();
    const storageArray = Object.keys(storage);
    storageArray.forEach( (storageName) => {
        localStorage.setItem(storageName,JSON.stringify(storage[storageName]));
    })
    
}