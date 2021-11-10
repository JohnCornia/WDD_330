import{qs, onTouch} from './utilities.js';
import{readFromLS, writeToLS} from './ls.js';

class ToDo {

  /*in the constructor you should set a variable with the element 
  our todo list will be built in, and the key we will use to 
  read/write from localStorage*/
  constructor() {
    key: 1
    elem: "myForm"
  }
  content = "";
  id = Date.now();
  completed = false;

  listTodos(){
    renderTodoList("myForm", getTodos(1));
  }

  addTodo(){
    let task = document.getElementById("newTaskText").value;
    console.log(task);
    saveTodo(1, task);
    listTodos();
  }
  /*It should use the renderTodoList function to output our 
  todo list when called. It should get called when a todo 
  is added, or removed, and when the Todos class is instantiated.*/
  
}

let toDoList = [];

//build a todo object, add it to the todoList, and 
//save the new list to local storage.
function saveTodo(key, task) { 
  //console.log("saveTodo called");
  getTodos(1);
  let listItem = new ToDo();
  listItem.content = task;
  toDoList.push(listItem);
  writeToLS(key, toDoList);
}

/* check the contents of todoList, a local variable 
containing a list of ToDos. If it is null then pull 
the list of todos from localstorage, update the local 
variable, and return it 

@param {string} key The key under which the value is stored under in LS 
@return {array} The value as an array of objects*/
function getTodos(key) {
  console.log(toDoList.length == 0);
  //console.log(toDoList);
  if (toDoList.length == 0) {
    toDoList = readFromLS(key);
  }
  console.log(toDoList);
  return toDoList;
 }

 /*
 * foreach todo in list, build a li element for the todo, and append it to 
 element
 * @param  {array} list The list of tasks to render to HTML
* @param {element} element The DOM element to insert our list elements into.
 
 */
function renderTodoList(element, list) { 
  console.log("renderTodoList called")
  /*for (let index = 0; index < list.length; index++) {
    document.getElementById(element).innerHTML = "<li>" + list[index] + "<li>"
  }*/
            console.log(list[1]);
            var storyHTML = localStorage.getItem(1)
            document.getElementById(element).innerHTML = list[0].content;
            console.log(storyHTML);
}

export default ToDo;