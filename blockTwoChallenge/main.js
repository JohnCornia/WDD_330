// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function display(elementId, data) {
    console.log(elementId);
    if (elementId == "sideMount" || elementId == "kneeMount" || elementId == "backMount" || elementId == "fullMount") {
        modal.style.display = "block";
        //console.log(data);
    } else
        modal.style.display = "none";
}

document.addEventListener('click', function(e) {
    fetch('https://johncornia.github.io/jiujitsuAPI/escapes.JSON')
        .then(response => response.json())
        //.then(console.log(response));
        //.then(data => console.log(data));
        .then(data => display(e.target.id, data));
});