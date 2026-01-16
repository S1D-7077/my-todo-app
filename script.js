const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Load tasks from backend
async function loadTasks() {
  const res = await fetch("/tasks");
  const tasks = await res.json();
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
addBtn.addEventListener("click", async () => {
  const task = taskInput.value.trim();
  if (!task) return;
  await fetch("/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task }),
  });
  taskInput.value = "";
  loadTasks();
});

// Delete task
async function deleteTask(index) {
  await fetch(`/tasks/${index}`, { method: "DELETE" });
  loadTasks();
}

// Enter key adds task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});

// Initial load
loadTasks();
