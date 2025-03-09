//Create | Read | Update | Delete

function submitNote() {
    let task = document.getElementById('user-input').value;
    if (task != ""){
        //Filled out input - add to li element
        addNotetoLi(task);
        //This clears out the input area so multiple button clicks aren't possible.
        document.getElementById('user-input').value = "";
    } else {
        alert('Please enter in a note!');
        //empty input error
    }
}

//Takes our task, creates text node and appends it to a li element then appends that li element to the ol list. 
function addNotetoLi(task) {
    //Get our list (ol)
    let uList = document.getElementById('list-container');
    //Create our li
    let li = document.createElement('li');
    //Append our text to an li element
    li.appendChild(document.createTextNode(task));

    //Add Delete button to the li as well
    let deleteBtn = document.createElement('input');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('value', 'Delete');
    deleteBtn.setAttribute('onclick', 'deleteNote()');
    li.appendChild(deleteBtn);
    //Append our li element to the list
    uList.appendChild(li);
}

//Delete -- This will delete all items from the list we created
function deleteUl() {
    const ul = document.getElementById('list-container');
    ul.innerHTML = '';
}

function deleteNote() {
    const testList = document.querySelectorAll('li');

}
//Bonus: utilize localStorage to save...