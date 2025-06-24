const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  const taskNumber = todoList.children.length + 1;

  const span = document.createElement("span");
  span.textContent = `${taskNumber}. ${text}`;
  span.title = "Click to toggle complete";

  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

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

  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);

  input.value = "";
}

function updateIndexes() {
  const items = todoList.querySelectorAll("li span");
  items.forEach((span, index) => {
    const taskText = span.textContent.split(". ").slice(1).join(". "); 
    span.textContent = `${index + 1}. ${taskText}`;
  });
}
