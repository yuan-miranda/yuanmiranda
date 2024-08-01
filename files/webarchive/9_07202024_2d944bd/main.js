combination = ["ControlLeft", "Slash"];
let keyPressed = [];
let consoleOpen = false;
const console = document.querySelector(".console");
const nonConsole = document.querySelector(".non-console");

function onPress(key) {
    if (!keyPressed.includes(key)) keyPressed.push(key);
}

function onRelease(key) {
    keyPressed = keyPressed.filter(k => k !== key);
}

document.addEventListener("DOMContentLoaded", () => {
    console.style.display = "none";
});

document.addEventListener("keydown", e => {
    onPress(e.code);
    if (combination.every(k => keyPressed.includes(k))) {
        console.style.display = consoleOpen ? "none" : "block";
        nonConsole.style.display = consoleOpen ? "block" : "none";
        consoleOpen = !consoleOpen;
    }
});

document.addEventListener("keyup", e => {
    onRelease(e.code);
});