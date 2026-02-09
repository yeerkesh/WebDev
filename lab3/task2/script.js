const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask(){
    const text = taskInput.value.trim();

    if(text == ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑';
    deleteBtn.className = 'delete-btn';

    checkbox.addEventListener('change', () => {
        span.classList.toggle('completed');
    });
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";


}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter") addTask();
});