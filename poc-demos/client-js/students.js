let idCounter = 1;
function* idGenerator() {
    while(true) {
        yield idCounter++
    } 
}

function addStudent() {
    
    // Get input field values
    let studentName = document.getElementById('name').value;
    let studentMajor = document.getElementById('major').value;

    // Validate values
    if (studentName && studentMajor) {

        // Create a new row and cells to hold the data
        let row = document.createElement('tr');
        let studentIdCell = document.createElement('td');
        let studentNameCell = document.createElement('td');
        let studentMajorCell = document.createElement('td');

        // Append cells to new row
        row.appendChild(studentIdCell);
        row.appendChild(studentNameCell);
        row.appendChild(studentMajorCell);

        // Append the new row to the existing table
        document.getElementById('students').appendChild(row);

        // Add student data to the newly appended row and its cells
        studentIdCell.innerText = idGenerator().next().value;
        studentNameCell.innerText = studentName;
        studentMajorCell.innerText = studentMajor;

        // Clear the input fields (for future values)
        document.getElementById('name').value = '';
        document.getElementById('major').value = '';

    }

}

document.getElementById('add').addEventListener('click', addStudent);