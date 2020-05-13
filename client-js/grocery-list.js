function addGroceryList(){
    let groceryItem = document.getElementById('new-item').value;

    if(groceryItem){
        let row = document.createElement('li', is = groceryItem);
        document.getElementById('grocery-list-items').appendChild(row);
        row.innerText = groceryItem;
        document.getElementById('new-item').value = '';
    }
}

document.getElementById('add-item').addEventListener('click', addGroceryList) 
document.getElementById('add-item').addEventListener('click', addGroceryList) 