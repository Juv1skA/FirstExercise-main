document.getElementById("actionButton").addEventListener("click", function() {
    alert("Button clicked!");
    ToggleDescription();
});

// displays current year 
document.getElementById("currentYear").innerText = new Date().getFullYear();

// hides description after button press
function ToggleDescription() {
    var paragraph = document.getElementById("description");
    paragraph.style.display = (paragraph.style.display === "none" || paragraph.style.display === "") ? "block" : "none";
}