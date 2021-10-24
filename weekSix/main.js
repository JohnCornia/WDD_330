import ToDo from "./toDo.js";
import { onTouch } from "./utilities.js";

let toDo = new ToDo(1, document.getElementById("myForm"));

document.getElementById("newTask").addEventListener("click", toDo.addTodo());


console.log(0);