const btnaddTask = document.getElementById("addTask");
btnaddTask.addEventListener('click', afegirTasca);
let contador = 0;
    
function afegirTasca(){
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById('taskList');
    const temp = document.getElementById('todo-template');
    const clonedTemplate = temp.content.cloneNode(true);

    let input = clonedTemplate.querySelector('.valor');
    input.innerText = taskInput.value;
    const idLi = clonedTemplate.querySelector("li");
    idLi.setAttribute("id", "id"+contador);
    contador++;

    
    const btnRemoveTask = clonedTemplate.querySelector(".removeTask");
    btnRemoveTask.addEventListener('click', function() {
        esborrarTasca(idLi)
    });

    
    const checkbox = clonedTemplate.querySelector("input[type='checkbox']");
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            completarTasca(idLi);
        } else {
            descompletarTasca(idLi);
        }
    });
    
    taskList.appendChild(clonedTemplate);
}

function esborrarTasca(li) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(li);
}

function completarTasca(li) {
    li.querySelector("label").style.textDecoration = "line-through";
    li.querySelector("label").style.color = "green";
}

function descompletarTasca(li) {
    li.querySelector("label").style.textDecoration = "none";
    li.querySelector("label").style.color = "";
}

function myFunction() {
    var input, filter, ul, li, label, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("taskList");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        label = li[i].getElementsByTagName("label")[0];
        txtValue = label.textContent || label.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
  