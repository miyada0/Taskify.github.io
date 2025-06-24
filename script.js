const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Event listeners
addBtn.addEventListener("click", addTodo);
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  const text = input.value.trim();
  if (text === "") return;

  // Create new list item
  const li = document.createElement("li");

  const taskNumber = todoList.children.length + 1;

  // Create text span with index number
  const span = document.createElement("span");
  span.textContent = `${taskNumber}. ${text}`;
  span.title = "Click to toggle complete";

  // Toggle completed class
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑️";
  delBtn.style.marginLeft = "10px";
  delBtn.style.background = "transparent";
  delBtn.style.border = "none";
  delBtn.style.cursor = "pointer";

  delBtn.addEventListener("click", () => {
    li.remove();
    updateIndexes(); 
  });

  // Add to DOM
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);

  input.value = "";
}

// 🧠 Update task numbers after deletion
function updateIndexes() {
  const items = todoList.querySelectorAll("li span");
  items.forEach((span, index) => {
    const taskText = span.textContent.split(". ").slice(1).join(". "); // remove old number
    span.textContent = `${index + 1}. ${taskText}`;
  });
}
