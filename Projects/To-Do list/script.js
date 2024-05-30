document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskbtn');
    const taskList = document.getElementById('taskList');

    const addTask = () => {
        const taskName = taskInput.value.trim();
        if (taskName) {
            const li = document.createElement('li');
            li.innerHTML = `
                ${taskName}
                <button class="deleteBtn">Delete</button>
                <button class="completeBtn">Complete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = ''; // Clear the input field
        }
    };

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    taskList.addEventListener('click', (e) => {
        console.log(e.target);  // Debugging log to see what element is clicked
        if (e.target.classList.contains('deleteBtn')) {
            e.target.parentElement.remove();
        } else if (e.target.classList.contains('completeBtn')) {
            e.target.parentElement.classList.toggle('completed');
        }
    });
});