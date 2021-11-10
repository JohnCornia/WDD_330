//do a querySelector lookup
function qs(selector) {
    return document.querySelector(selector);
}

//add a touchend event listener to an 
//element for mobile with a click event 
//fallback for desktops

function onTouch(elementSelector, callback) {
    console.log("onTouch called");
    /*@param {string} elementSelector The selector 
    for the element to attach the listener to*/
    document.getElementById(elementSelector).addEventListener("touchend", callback);
    document.getElementById(elementSelector).addEventListener("click", callback);
    console.log(elementSelector);
    /*@param {function} callback The callback function to run*/

}

export{
    qs,
    onTouch
}