import ToDo from "./toDo.js";
import { onTouch } from "./utilities.js";

/*document.getElementById("createNewTask").addEventListener("click", function name(params) {
    var storyName = "goodStory";
            var storyHTML = document.getElementById("newTaskText").value
            localStorage.setItem(storyName, storyHTML)
});*/
let toDo = new ToDo();
onTouch("createNewTask", toDo.addTodo);
toDo.listTodos();