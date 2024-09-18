const todoList = document.getElementById('todo-list');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');

let draggedItem = null;

const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        const okButton = document.createElement('button');
        okButton.textContent = "OK";
        okButton.className = "ok-button";
        okButton.onclick = () => {
            newTask.remove(); // Remove task when OK is clicked
        };

        newTask.appendChild(okButton);
        newTask.setAttribute('draggable', 'true');
        todoList.appendChild(newTask);
        taskInput.value = ''; // Clear input field
        makeDraggable(newTask); // Add drag and drop functionality
    }
};

const makeDraggable = (item) => {
    item.addEventListener('dragstart', () => {
        draggedItem = item;
        setTimeout(() => {
            item.classList.add('dragging');
        }, 0);
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
        draggedItem = null;
    });

    item.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    item.addEventListener('dragenter', (e) => {
        e.preventDefault();
        item.classList.add('hovered');
    });

    item.addEventListener('dragleave', () => {
        item.classList.remove('hovered');
    });

    item.addEventListener('drop', () => {
        if (draggedItem) {
            todoList.insertBefore(draggedItem, item);
        }
        item.classList.remove('hovered');
    });
};

// Add task when clicking the button
addTaskBtn.addEventListener('click', addTask);
