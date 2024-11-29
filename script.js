// Get references to DOM elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const taskValue = taskInput.value.trim();
  if (taskValue) {
    addTask(taskValue);
    taskInput.value = ''; 
  }
});

// Function to add a task
function addTask(task) {
  const li = document.createElement('li');

  li.innerHTML = `
    <span>${task}</span>
    <div>
      <button class="complete-btn">✓</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  li.querySelector('.complete-btn').addEventListener('click', () => {
    // li.classList.toggle('completed');
    li.classList.add('decoration')

  });

  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  taskList.appendChild(li);
}
