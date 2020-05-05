let idCounter = 1;
function* idGenerator () {
    while(true) {
        yield idCounter++
    }  
}

function addStudent() {
    console.log('addStudent invoked');
    // get input field values
    let studentName = document.getElementById('name').value;
    let studentMajor = document.getElementById('major').value;
    

    // validate values
    if (studentName && studentMajor){

        //create a new row and cells to hold the data
        let row = document.createElement('tr');
        let studentIdCell = document.createElement('td');
        let studentNameCell = document.createElement('td');
        let studentMajorCell = document.createElement('td');

        //Append calls to new row
        row.appendChild(studentIdCell);
        row.appendChild(studentNameCell);
        row.appendChild(studentMajorCell);

        //Append the new row to the existing table
        document.getElementById('studentss').appendChild(row);

        //Add student data to the newly appended row and its cells
        studentIdCell.innerHTML = idGenerator().next().value;
        studentNameCell.innerHTML = studentName;
        studentMajorCell.innerHTML = studentMajor;

        //clear the input fields (for future values)
        document.getElementById('name').value = '';
        document.getElementById('major').value = '';
    }  
}

document.getElementById('add').addEventListener('click', addStudent);