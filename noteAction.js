/* All declarations first */
const todoValue = document.getElementById("todoText");
const todoAlert = document.getElementById("alert");
const listItems = document.getElementById("list-items");
const addUpdate = document.getElementById("addUpdateClick");

/* Declare localstorage object */
let todo = JSON.parse(localStorage.getItem("todo-list"));
if (!todo) {
    todo = [];
}


/* Add functions for Create | Read | Update | Delete or CRUD */
function CreateTodoItems() {
    //Writing to localstorage
    if (todoValue.value === "") {
        todoAlert.innerText = "Please enter your todo text!";
        todoValue.focus();
    } else {
        let isPresent = false;
        todo.forEach((element) => {
            if (element.item == todoValue.value) {
                isPresent = true;
            }
        });

        if (isPresent) {
            setAlertMessage("This item alread present in the list!");
            return;
        }

        let li = document.createElement("li");
        const todoItems = `<div title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${todoValue.value}</div><div>
                    <img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="./assets/pen-to-square-regular.svg" />
                    <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="./assets/trash-can-regular.svg" /></div></div>`;
        li.innerHTML = todoItems;
        listItems.appendChild(li);

        if (!todo) {
            todo = [];
          }
          let itemList = { item: todoValue.value, status: false };
          todo.push(itemList);
          setLocalStorage();
        }
        todoValue.value = "";
        setAlertMessage("Todo item Created Successfully!");
}

// Reads the todo items in localstorage
function ReadToDoItems() {
    todo.forEach((element) => {
      let li = document.createElement("li");
      let style = "";
      if (element.status) {
        style = "style='text-decoration: line-through'";
      }
      const todoItems = `<div ${style} title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${
        element.item
      }
      ${
        style === ""
          ? ""
          : '<img class="todo-controls" src="/images/check-mark.png" />'
      }</div><div>
      ${
        style === ""
          ? '<img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="/images/pencil.png" />'
          : ""
      }
      <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="/images/delete.png" /></div></div>`;
      li.innerHTML = todoItems;
      listItems.appendChild(li);
    });
  }
  ReadToDoItems();

// Updates
function UpdateToDoItems(e) {
    if (
        e.parentElement.parentElement.querySelector("div").style.textDecoration === "") {
      todoValue.value =
        e.parentElement.parentElement.querySelector("div").innerText;
      updateText = e.parentElement.parentElement.querySelector("div");
      addUpdate.setAttribute("onclick", "UpdateOnSelectionItems()");
      addUpdate.setAttribute("src", "/images/refresh.png");
      todoValue.focus();
    }
}
  

function UpdateOnSelectionItems() {
    let IsPresent = false;
    todo.forEach((element) => {
        if (element.item == todoValue.value) {
            IsPresent = true;
        }
    });
  
    if (IsPresent) {
        setAlertMessage("This item already present in the list!");
        return;
    }
  
    todo.forEach((element) => {
        if (element.item == updateText.innerText.trim()) {
            element.item = todoValue.value;
        }
    });
    setLocalStorage();
  
    updateText.innerText = todoValue.value;
    addUpdate.setAttribute("onclick", "CreateToDoItems()");
    addUpdate.setAttribute("src", "/images/plus.png");
    todoValue.value = "";
    setAlertMessage("Todo item Updated Successfully!");
}

// Delete 
function DeleteToDoItems(e) {
    let deleteValue =
        e.parentElement.parentElement.querySelector("div").innerText;
  
    if (confirm(`Are you sure that you want to delete this ${deleteValue}!`)) {
        e.parentElement.parentElement.setAttribute("class", "deleted-item");
        todoValue.focus();
  
        todo.forEach((element) => {
            if (element.item == deleteValue.trim()) {
            todo.splice(element, 1);
        }
        });
  
        setTimeout(() => {
            e.parentElement.parentElement.remove();
        }, 1000);
        setLocalStorage();
    }
}

// Completed 
function CompletedToDoItems(e) {
    if (e.parentElement.querySelector("div").style.textDecoration === "") {
      const img = document.createElement("img");
      img.src = "/images/check-mark.png";
      img.className = "todo-controls";
      e.parentElement.querySelector("div").style.textDecoration = "line-through";
      e.parentElement.querySelector("div").appendChild(img);
      e.parentElement.querySelector("img.edit").remove();
  
      todo.forEach((element) => {
        if (
          e.parentElement.querySelector("div").innerText.trim() == element.item
        ) {
          element.status = true;
        }
      });
      setLocalStorage();
      setAlertMessage("Todo item Completed Successfully!");
    }
}

function setLocalStorage() {
    localStorage.setItem("todo-list", JSON.stringify(todo));
}

function setAlertMessage(message) {
    todoAlert.removeAttribute("class");
    todoAlert.innerText = message;
    setTimeout(() => {
      todoAlert.classList.add("toggleMe");
    }, 1000);
}
