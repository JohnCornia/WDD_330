document.getElementById("position").addEventListener("change", function() {
    console.log("Event listner called");
    console.log(this);
    fetch('https://johncornia.github.io/jiujitsuAPI/escapes.JSON')
        .then(response => response.json())
        .then(data => console.log(data));

})