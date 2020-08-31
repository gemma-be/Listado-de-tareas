var inputTarea = document.getElementById("inputTarea");
var lista = document.getElementById("listaContainer");
var containerList = document.querySelector(".none");
var listaTareas = [];

function addTodo() {
    var tarea = inputTarea.value;
    var preMacth = /[A-Za-z]/;
    if (preMacth.test(tarea)) {
        listaTareas.push(tarea);
        inputTarea.value = "";
        updateList();
    }
}

function updateList() {
    containerList.style.display = "block";
    lista.innerHTML = "";
    lista.textContent = "";
    var ul = document.createElement("ul");
    ul.setAttribute("id", "lista-tareas");
    lista.appendChild(ul);
    listaTareas.forEach(function (item, index) {
        var li = document.createElement("li");
        li.innerHTML = "<p>" + item + " <a href='#' class='btnBorrar' onclick= 'quitarItem(" + item + ")'>Borrar</a></p>";
        ul.appendChild(li);
    });
}

function quitarItem(itemList) {
    listaTareas = listaTareas.filter(function (valores, _index, _Array) {
        if (valores === itemList) {
            console.log("igual");
            return false;
        }
        return true;
    });
    updateList();
    if (listaTareas.length <= 0) {
        containerList.style.display = "none";
    }
}