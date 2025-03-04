// As basic as can be...
// Create | Read | Update | Delete

// Adds input li to ul on click
function addNoteToList(){
    //Get the ul container
    let ul = document.getElementById('note-container');
    //Get the user input value
    let userInputValue = document.getElementById('userInput').value;
    //Create li for the note
    let li = document.createElement('li');
    //Create the edit and delete buttons
    createEditBtn();
    createDeleteBtn();
    //Assign the user input to the li element
    li.innerHTML = userInputValue;
    //Append the li element to the ul
    ul.appendChild(li);
}

function createEditBtn (){}

function createDeleteBtn(){}

// Deletes input on click
function clearInput(){}