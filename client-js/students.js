let idCounter =1;
function* idGenerator() {
    while(true ){
        yield idCounter++
    }
}

function addStudent(name, major) {
    console.log('addStudent invoked');
    //Get input values
    let studentName = document.getElementById('name').value;
    let studentMajor = document.getElementById('major').value
    //validate values
    if (studentName && studentMajor) {

    
        //create a new row and cells to hold the data
        let row = document.createElement('tr');
        let studentIdCell = document.createElement('td');
        let studentNameCell = document.createElement('td');
        let studentMajorCell = document.createElement('td');
        //append cells to new row
        row.appendChild(studentIdCell);
        row.appendChild(studentNameCell);
        row.appendChild(studentMajorCell);
        //append thte new row to the existing table
        document.getElementById('students').appendChild(row);
        //add student data to the newly appended row and its cells
        studentIdCell.innerText = idGenerator().next().value;
        studentNameCell.innerText = studentName;
        studentMajorCell.innerText = studentMajor;
        //clear the input fields (for future values)
        document.getElementById('name').value = '';
        document.getElementById('major').value = '';
    }
    // Get a reference to the table
  

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell1 = newRow.insertCell(1);

  let newCell2 = newRow.insertCell(2);
  // Append a text node to the cell
  let newText1 = document.createTextNode(name);
  newCell1.appendChild(newText1);
  let newText2 = document.createTextNode(major);
  newCell2.appendChild(newText2);
  }

  document.getElementById('add').addEventListener('click', addStudent)