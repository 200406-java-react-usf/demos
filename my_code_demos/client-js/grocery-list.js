function addItem () {
    console.log('item added');
    // get newItem value
    let newItem = document.getElementById('new-item').value;
    // validate value of newItem
    if (newItem) {
        // create new li for newItem
        let newLi = document.createElement('li');

        // append newItem into grocery-list
        document.getElementById('grocery-list-items').appendChild(newLi);

        // add data to the newly appended grocery-list
        newLi.innerHTML = newItem;

        //clear the input fields (for future values)
        document.getElementById('new-item').value = '';  
    }   
}

document.getElementById('add-item').addEventListener('click', addItem);