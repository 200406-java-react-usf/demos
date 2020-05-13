// selecting / targeting
document.getElementById('some-ide'); // grabs the first element with the provided ID
document.getElementsByClassName('some-class'); // return an array of elemenets with the given class
document.querySelector('div.answers > label > input[name^="question-"]:checked'); // very powerful selector

// Manipulation
document.createElement('tr');
tr.prepend(); // adds a node as the first child of an element
tr.appendChild(document.createElement('td')); // 
