// As basic as can be...
// Create | Read | Update | Delete

//Get form, item and list
let addToList = document.querySelector('#add-to-todo-container');
let todoItem = document.querySelector('#todo-item');
let todoList = document.querySelector('#todo-list');
let deleteBtn = document.getElementById('deleteBtn');

//Adds our todo item to our list and savesto local storage
addToList.addEventListener('submit', function (e) {
    //Don't submit form...
    e.preventDefault();

    //Ignore if item is empty...
    if (todoItem.value.length < 1) return;

    //Add to todo list
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button');
    deleteBtn.id = 'deleteBtn';
    deleteBtn.innerHTML = 'delete';
    li.innerHTML = todoItem.value;
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    //Clear input...
    todoItem.value = '';

    //Save list to localStorage...
    localStorage.setItem('todoItems', todoList.innerHTML);
}, false);

//Check for saved todo list items...
let saved = localStorage.getItem('todoItems');

//Update if there are saved items...
if(saved) {
    todoList.innerHTML = saved;
}