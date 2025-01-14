// Function to open the navbar (dropdown) when hamburger icon is hovered
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";  // Show the navbar
}

// Function to close the navbar (dropdown) when cancel icon is clicked
function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";  // Hide the navbar
}

// Detect clicks outside of the dropdown and close the navbar
document.addEventListener("click", function(event) {
    const navbar = document.querySelector(".dropdown");
    const hamburgButton = document.querySelector(".hamburg");  // Hamburger button selector
    const cancelButton = document.querySelector(".cancel");    // Cancel button selector

    // Check if the click is outside the dropdown, hamburger button, and cancel button
    if (!navbar.contains(event.target) && !hamburgButton.contains(event.target) && !cancelButton.contains(event.target)) {
        cancel();  // Close the navbar if clicked outside
    }
});

// Typewriter Effect
const texts = [
    "CREATOR",
    "DESIGNER",
    "YOUTUBER"
]
let speed  =80;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter