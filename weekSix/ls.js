//read a value from local storage and parse it as JSON
function readFromLS(key) { 
    let lsItem = localStorage.getItem(key);
    return lsItem;
}

//write an array of objects to local storage under the provided key
function writeToLS(key, data) {
    localStorage.setItem(key, data);
 }

 export {
     readFromLS,
     writeToLS
 }