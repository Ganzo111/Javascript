function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") {
    alert("Enter something bro");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

function addDelete() {
  const taskList = document.getElementById("taskList");
  const tasks = taskList.getElementsByTagName("li");
    if (tasks.length === 0) {
      alert("No tasks to delete");
      return;
    }
  taskList.removeChild(tasks[tasks.length - 1]);
}