document.getElementById('add-item').addEventListener('click', () => {

    let newItem = document.getElementById('new-item').value;
    let groceryList = document.getElementById('grocery-list-items');

    if(newItem) {
        let newListItem = document.createElement('li')
        newListItem.innerText = newItem;
        groceryList.appendChild(newListItem);
        document.getElementById('new-item').value = '';
    }
});

document.getElementById('grocery-list-items').addEventListener('click', (e) => {

    //Obtain the target of the clink event from the Event object
    let eventTarget = e.target;

    //Determine if tag name of the event target is a list item
    if(eventTarget.tagName === 'LI') {

        //Append the eventTarget to the purchased-items list
        document.getElementById('purchased-items').appendChild(eventTarget);
    }
});

document.getElementById('purchased-items').addEventListener('click', (e) => {    
    if(e.target.tagName === 'LI'){
        document.getElementById('grocery-list-items').appendChild(e.target);
    }
});

