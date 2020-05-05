let idCounter = 1;

function* idGenerator() {
    while(true) {
        yield idCounter++
    }
}

function addStudent() {
    
    //Get input field values
    let studentName = document.getElementById('name').value;
    let studentMajor = document.getElementById('major').value;

    //Validate values
    if (studentMajor && studentName) {
        //Create a table
        let row = document.createElement('tr')

        //appending data into cells
        let studentIdCell = document.createElement('td');
        let studentNameCell = document.createElement('td');
        let studentMajorCell = document.createElement('td');

        //append cells to the new rows
        row.appendChild(studentIdCell);
        row.appendChild(studentNameCell);
        row.appendChild(studentMajorCell);
        
        //append rows to table
        document.getElementById('students').appendChild(row);

        //add student data to newly append row and its cell
        studentIdCell.innerText = idGenerator().next().value;
        studentNameCell.innerText = studentName;
        studentMajorCell.innerText = studentMajor;

        //Clear the input fields (for future values)
        document.getElementById('name').value = '';
        document.getElementById('major').value = '';
    }


    // create a new row and cells to hold the data
    //append cells to new row
    //append the new row to the existing
    //Add student data to the newly appended row and its cells
    //clear the input fields (for future calues)
}

document.getElementById('add').addEventListener('click', addStudent);