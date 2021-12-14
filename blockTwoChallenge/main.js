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
        var index;
        if (elementId == "sideMount") {
            index = 0;
        }
        if (elementId == "kneeMount") {
            index = 1;
        }
        if (elementId == "backMount") {
            index = 2;
        }
        if (elementId == "fullMount") {
            index = 3;
        }

        document.getElementById("name").innerHTML = data.mount[index].name;
        document.getElementById("description").innerHTML = data.mount[index].description;
        document.getElementById("escape").innerHTML = data.mount[index].escapes[0].description;
        document.getElementById("escapeVid").src = data.mount[index].escapes[0].url;
        document.getElementById("attack").innerHTML = data.mount[index].escapes[1].description;
        document.getElementById("attackVid").src = data.mount[index].escapes[1].url;
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