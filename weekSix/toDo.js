import{qs, onTouch} from './utilities.js';
import{readFromLS, writeToLS} from 'ls.js';

class ToDo {

  /*in the constructor you should set a variable with the element 
  our todo list will be built in, and the key we will use to 
  read/write from localStorage*/
  constructor(key, data) {
    this.key = key;
    this.data = data;
  }
}


export default ToDo;