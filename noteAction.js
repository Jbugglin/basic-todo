//Create | Read | Update | Delete

//Create
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

//Read
//Takes our task, creates text node and appends it to a li element then appends that li element to the ol list. 
function addNotetoLi(task) {
    //Get our list (ol)
    let oList = document.getElementById('list-container');
    //Create our li
    let li = document.createElement('li');
    //Append our text to an li element
    li.appendChild(document.createTextNode(task));
    //Append our li element to the list
    oList.appendChild(li);
}

//Update -- Need to figure out how to edit a li element

//Delete -- Need to figure out how to delete a li element

//Bonus: utilize localStorage to save...