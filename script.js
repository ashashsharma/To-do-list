document.getElementById('task-form').addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();

  var taskInput = document.getElementById('task-input');
  var taskList = document.getElementById('task-list');

  if (taskInput.value !== '') {
    var taskText = taskInput.value;
    var taskElement = document.createElement('li');
    taskElement.textContent = taskText;

    taskElement.addEventListener('click', function() {
      this.classList.toggle('completed');
    });

    taskList.appendChild(taskElement);
    taskInput.value = '';
  }
}
