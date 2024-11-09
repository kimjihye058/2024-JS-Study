const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;        // Copy the current value of the input to a new variable
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);