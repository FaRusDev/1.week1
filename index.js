function addTask() {
  let input = document.getElementById("taskInput")
  let taskTes = input.value.trim()

  if (!taskTes) {
    return
  }

  let li = document.createElement("li")
  li.innerHTML = `<span onclick={toggleComplete(this)}>${taskTes}</span><button class="remove" onclick="deleteTask(this)">x</button>`

  document.getElementById("taskList").appendChild(li)
  input.value = ""

  console.log("inputan : ", taskTes)
}

function deleteTask(button) {
  let li = button.parentElement
  li.remove()
}

function toggleComplete(span) {
  span.classList.toggle("completed")
}
