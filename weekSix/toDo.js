import{qs, onTouch} from './utilities.js';
import{readFromLS, writeToLS} from './ls.js';

class ToDo {

  /*in the constructor you should set a variable with the element 
  our todo list will be built in, and the key we will use to 
  read/write from localStorage*/
  constructor(key, elem) {
    this.key = key;
    this.elem = elem
  }
  content = "";
  id = Date.now();
  completed = false;
  addTodo(){
    let task = document.getElementById("addNewTask").value;
    saveTodo(task, 1);
    console.log(task);
  }
  /*It should use the renderTodoList function to output our 
  todo list when called. It should get called when a todo 
  is added, or removed, and when the Todos class is instantiated.*/
  listTodos(){
    let elem = document.getElementById("myForm");
    renderTodoList(elem, getTodos(1));
  }
}

let toDoList = [null];

//build a todo object, add it to the todoList, and 
//save the new list to local storage.
function saveTodo(task, key) { 
  let listItem = new ToDo(key, document.getElementById("myForm"));
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
  if (toDoList == null) {
    toDoList = readFromLS(key);
  }
  
  return toDoList;
 }

 /*
 * foreach todo in list, build a li element for the todo, and append it to 
 element
 * @param  {array} list The list of tasks to render to HTML
* @param {element} element The DOM element to insert our list elements into.
 
 */
function renderTodoList(list, element) { 
  for (let index = 0; index < list.length; index++) {
    let newElem = document.createElement("LI");
    newElem.innerHTML = list.data;
    element.appendChild(newElem);
  }
}

export default ToDo;