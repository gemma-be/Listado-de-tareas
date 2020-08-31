const inputTarea: HTMLInputElement = document.getElementById(
  "inputTarea"
) as HTMLInputElement;
const lista: HTMLInputElement = document.getElementById(
  "listaContainer"
) as HTMLInputElement;
const containerList: HTMLInputElement = document.querySelector(
  ".none"
) as HTMLInputElement;

let listaTareas: Array<string> = [];

function addTodo(): void {
  const tarea: string = inputTarea.value;
  let preMacth = /[A-Za-z]/;

  if (preMacth.test(tarea)) {
    listaTareas.push(tarea);

    inputTarea.value = "";
    updateList();
  }
}

function updateList(): void {
  containerList.style.display = "block";
  lista.innerHTML = "";
  lista.textContent = "";

  const ul = document.createElement("ul");
  ul.setAttribute("id", "lista-tareas");
  lista.appendChild(ul);

  listaTareas.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<p>${item} <a href='#' class='btnBorrar' onclick= 'quitarItem(${item})'>Borrar</a></p>`;

    ul.appendChild(li);
  });
}

function quitarItem(itemList: string): void {
  listaTareas = listaTareas.filter((valores: string, _index, _Array) => {
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
