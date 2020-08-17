var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = [
    'Fazer café',
    'Estudar JS'
];

function renderToDos() {
    listElement.innerHTML = '';
    for (text of toDos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(text);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Delete');
        linkElement.setAttribute('href', '#');

        var pos = toDos.indexOf(text);


        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

function addToDo() {
    var todoText = inputElement.value;
    toDos.push(todoText);
    inputElement.value = '';
    renderToDos();
}

function deleteToDos(pos) {
    toDos.splice(pos, 1);
    renderToDos();
}

buttonElement.onclick = addToDo;

renderToDos();