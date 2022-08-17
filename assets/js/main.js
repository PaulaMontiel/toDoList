//import {data as dataTask} from '../data/tasks.js';
const taskList = document.getElementById("tareas");
const mytotal = document.getElementById("mytotal");
const newTask = document.getElementById("nuevaTarea");
const btnAdd = document.getElementById("agregarTarea");
const myCheckis = document.getElementById("myCheckis");
let checked = false;
const id1 = createId();
const id2 = createId();
const id3 = createId();
let checkStatus = checked;
let dataTask =[
  {
    id: id1.toString(),
    data: `<tr><td>${id1}</td><td>Globos</td><td><input type="checkbox" onchange="checkTask('${id1}')";></td><td><button onclick="deleteTask('${id1}');"><i class="fa-solid fa-trash fa-2xs"></i></button></td></tr>`,
    checked: checked
},
  {
    id: id2.toString(),
    data: `<tr><td>${id2}</td><td>Cotillon</td><td><input type="checkbox" onchange="checkTask('${id2}')";></td><td><button onclick="deleteTask('${id2}');"><i class="fa-solid fa-trash fa-2xs"></i></button></td></tr>`,
    checked: checked
},
  {
    id: id3.toString(),
    data: `<tr><td>${id3}</td><td>Torta</td><td><input type="checkbox" onchange="checkTask('${id3}')";></td><td><button onclick="deleteTask('${id3}');"><i class="fa-solid fa-trash fa-2xs"></i></button></td></tr>`,
    checked: checked
},
];
function validateElement(arr) {
  if (arr.includes("")) {
    return false;
  }
  return true;
}
function createId() {
  return Math.random().toString(16).slice(6);
}
function deleteTask(taskId) {
  var index = dataTask
    .map((x) => {
      return x.id;
    })
    .indexOf(taskId);
  dataTask.splice(index, 1);
  renderTask();
}

function createTask(name) {
  let idTask = createId();
  let check = false;
  let task = {
    id: idTask.toString(),
    data: `<tr><td>${idTask}</td><td>${name} </td><td><input type="checkbox" onchange="checkTask('${idTask}')";></td><td><button
    onclick="deleteTask('${idTask}');"><i class="fa-solid fa-trash fa-2xs"></i></button></td></tr>`,
    checked: check
  };
  dataTask.push(task);
  newTask.value = '';
  renderTask();
}

function checkTask(taskId) {
    console.log(dataTask);
    let index = '';
    index = dataTask
    .map((x) => {
      return x.id;
    })
    .indexOf(taskId);
    console.log("El item checkeado es el " + index);
    if (dataTask[index].checked){
        dataTask[index].checked = false;
    }else {
        dataTask[index].checked = true;
    }
    
    renderTask();
}

btnAdd.addEventListener("click", () => {
  console.log(newTask.value);
  // Adding tasks
  if (validateElement([newTask.value])) {
    createTask(newTask.value);
  } else {
    alert("añadir campos");
  }
});

/* Actualizamos la información en el HTML */
function renderTask() {
  let html = "";
  let total = 0;
  let done = 0;
  let decorate = '';
 
  dataTask.forEach((element) => { 
    decorate = element.data.replace('type="checkbox" checked','type="checkbox"').replace('<tr style="background-color:green" >', '<tr>');
    if(element.checked){
        done = done + 1;
        decorate = element.data.replace('type="checkbox"','type="checkbox" checked').replace('<tr>', '<tr style="background-color:green" >');
    }

    html += decorate;
    total = total + 1;
    myCheckis.innerHTML = done;
  });

  taskList.innerHTML = html;
  mytotal.innerHTML = total;
  
}

renderTask();