document.addEventListener("DOMContentLoaded", loadTask)

function addTask() {
  let input = document.getElementById("taskInput")
  let taskTes = input.value.trim()

  if (!taskTes) {
    return
  }

  let li = document.createElement("li")
  li.innerHTML = `<span onclick="toggleComplete(this)">${taskTes}</span><button class="remove" onclick="deleteTask(this, '${taskTes}')">x</button>`

  document.getElementById("taskList").appendChild(li)
  saveTask(taskTes)
  input.value = ""
}

function deleteTask(button, taskTes) {
  let tasks = getTaskFromStorage()
  tasks = tasks.filter((task) => task.text !== taskTes)

  let li = button.parentElement
  li.remove()
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function toggleComplete(span) {
  span.classList.toggle("completed")
  updateTask(span)
}

function saveTask(kumpulan) {
  let tasks = getTaskFromStorage()
  tasks.push({ text: kumpulan, completed: false })
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function getTaskFromStorage() {
  let tasks = localStorage.getItem("tasks")
  try {
    tasks = JSON.parse(tasks) || []
  } catch (error) {
    tasks = []
  }
  return tasks
}

function loadTask() {
  let tasks = getTaskFromStorage()

  tasks.forEach((task) => {
    let li = document.createElement("li")
    li.innerHTML = `<span onclick="toggleComplete(this)" class="${
      task.completed ? "completed" : ""
    }">${task.text}</span><button class="remove" onclick="deleteTask(this, '${
      task.text
    }')">x</button>`
    document.getElementById("taskList").appendChild(li)
  })

  console.log("Tasks: ", tasks)
}

function updateTask(span) {
  let tasks = getTaskFromStorage()
  tasks.forEach((task) => {
    if (task.text === span.innerHTML) {
      task.completed = !task.completed
    }
  })
  localStorage.setItem("tasks", JSON.stringify(tasks))
  console.log("Tasks: ", tasks)
}
