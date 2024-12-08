let todos = JSON.parse(localStorage.getItem("todos")) || [];

// show on screen
function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = ""; // clear list
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            ${todo}
            <span class="delete" onclick="deleteTodo(${index})">❌</span>
        `;
    todoList.appendChild(li);
  });
  saveTodos();
}

// AddTodo
function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const newTodo = todoInput.value.trim();
  if (newTodo) {
    todos.push(newTodo);
    todoInput.value = "";
    renderTodos();
  }
}

// DeleteTodo
function deleteTodo(index) {
  todos.splice(index, 1); // delete @index
  renderTodos();
}

// SaveTodo
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

renderTodos();
