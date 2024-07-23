const versions = [
    "files/webarchive/04092024_30b04de_1/index.html",
    "files/webarchive/04092024_ef4a586_2/index.html",
    "files/webarchive/04102024_12c236c_1/index.html",
    "files/webarchive/04102024_374ba48_2/index.html",
    "files/webarchive/05012024_227abb8/index.html",
    "files/webarchive/07202024_13cab6e_1/index.html",
    "files/webarchive/07202024_cd33c7e_2/index.html",
    "files/webarchive/07202024_021e208_3/index.html",
    "files/webarchive/07202024_2d944bd_4/index.html",
    "index.html"
]

function updateTimeline(value) {
    const versionFrame = document.querySelector(".timelineFrame");
    const selectedVersion = versions[value];
    versionFrame.src = selectedVersion;
}

combination = ["ControlLeft", "Slash"];
let keyPressed = [];
let consoleOpen = false;
const console = document.querySelector(".console-ui");
const nonConsole = document.querySelector(".non-console");

function onPress(key) {
    if (!keyPressed.includes(key)) keyPressed.push(key);
}

function onRelease(key) {
    keyPressed = keyPressed.filter(k => k !== key);
}

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    if (slider) {
        slider.max = versions.length - 1;
        slider.value = versions.length - 1;
        updateTimeline(versions.length - 1);
    }

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