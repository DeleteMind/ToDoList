let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
});