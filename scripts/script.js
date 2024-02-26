console.log("JavaScript working!");

let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();
    if (taskName !== "") {
        tasks.push({ name: taskName, completed: false });
        renderTasks();
        taskInput.value = "";
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function deleteSelectedTasks() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
}

function deleteAllTasks() {
    tasks = [];
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task";
        if (task.completed) {
            li.className += " completed";
        }
        li.innerHTML = `
            <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? "checked" : ""}>
            <span>${task.name}</span>
            <button onclick="deleteTask(${index})"><img src="images/eliminar.png" class="icon-trash"></button>
        `;
        taskList.appendChild(li);
    });
}
