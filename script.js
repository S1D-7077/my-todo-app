const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = `<li class="empty">No tasks yet!</li>`;
    return;
  }

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Add task
addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (!task) return;

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
  loadTasks();
});

// Delete task
function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

// Enter key adds task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});

// Initial load
loadTasks();
