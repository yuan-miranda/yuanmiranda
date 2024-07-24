const versions = {
    "../04092024_30b04de_1/index.html": {
        "commit": "30b04de",
        "commitMessage": "Initial commit",
        "date": "04/09/2024",
        "description": ""
    },
    "../04092024_ef4a586_2/index.html": {
        "commit": "ef4a586",
        "commitMessage": "Hello, World!",
        "date": "04/09/2024",
        "description": ""
    },
    "../04102024_12c236c_1/index.html": {
        "commit": "12c236c",
        "commitMessage": "check if Github Pages store values.",
        "date": "04/10/2024",
        "description": ""
    },
    "../04102024_374ba48_2/index.html": {
        "commit": "374ba48",
        "commitMessage": "just discovered Github Pages is static lol",
        "date": "04/10/2024",
        "description": ""
    },
    "../05012024_227abb8_1/index.html": {
        "commit": "227abb8",
        "commitMessage": "test",
        "date": "05/01/2024",
        "description": ""
    },
    "../07202024_13cab6e_1/index.html": {
        "commit": "13cab6e",
        "commitMessage": "HAS CONTENT NOW?!?",
        "date": "07/20/2024",
        "description": ""
    },
    "../07202024_cd33c7e_2/index.html": {
        "commit": "cd33c7e",
        "commitMessage": "fixed the wrapping issue of the ticker, and made the header sticky.",
        "date": "07/20/2024",
        "description": ""
    },
    "../07202024_021e208_3/index.html": {
        "commit": "021e208",
        "commitMessage": "added some very secret code (shh!)",
        "date": "07/20/2024",
        "description": ""
    },
    "../07202024_2d944bd_4/index.html": {
        "commit": "2d944bd",
        "commitMessage": "added the console toggler and console input field.",
        "date": "07/20/2024",
        "description": ""
    },
    "../07232024_9eeaa41_1/index.html": {
        "commit": "9eeaa41",
        "commitMessage": "added website design history browsing, (testing)",
        "date": "07/23/2024",
        "description": ""
    },
    "../07242024_152e697_1/index.html": {
        "commit": "152e697",
        "commitMessage": "fixed the path error when browsing the archive recursively",
        "date": "07/24/2024",
        "description": ""
    },
    "index.html": {
        "commit": "Current",
        "commitMessage": "Current",
        "date": "Current",
        "description": "Current"
    }
    
}

combination = ["ControlLeft", "Slash"];
let keyPressed = [];
let consoleUi;
let consoleOpen = false;
let nonConsole;
let versionFrame;
let infoDiv;
let infoDivOpen = false;

function expandInfo(boolOverride=false) {
    const pCommit = document.querySelector(".commit");
    const pCommitMessage = document.querySelector(".commit-message");
    const pDate = document.querySelector(".date");
    const pDescription = document.querySelector(".description");
    const currentFrame = (versionFrame.src.split("/").slice(3)).join("/");
    versionFrame = document.querySelector(".timelineFrame");

    if (!boolOverride) infoDivOpen = !infoDivOpen;
    if (infoDivOpen) infoDiv.style.display = "block";
    else infoDiv.style.display = "none";
    if (boolOverride) {
        pCommit.textContent = `Commit: ${versions[currentFrame].commit}`;
        pCommitMessage.textContent = `Commit Message: ${versions[currentFrame].commitMessage}`;
        pDate.textContent = `Date: ${versions[currentFrame].date}`;
        pDescription.textContent = `Description: ${versions[currentFrame].description}`;
    }
}

function updateTimeline(value) {
    versionFrame = document.querySelector(".timelineFrame");
    const selectedVersion = Object.keys(versions)[value];
    versionFrame.src = selectedVersion;
    console.log("called");
    expandInfo(true);
}

function onPress(key) {
    if (!keyPressed.includes(key)) keyPressed.push(key);
}

function onRelease(key) {
    keyPressed = keyPressed.filter(k => k !== key);
}

document.addEventListener("DOMContentLoaded", () => {
    consoleUi = document.querySelector(".console-ui");
    nonConsole = document.querySelector(".non-console");
    infoDiv = document.querySelector(".timeline-details");
    const slider = document.querySelector(".slider");

    if (consoleUi) consoleUi.style.display = "none";    
    if (slider) {
        const versionLength = Object.keys(versions).length;
        slider.max = versionLength - 1;
        slider.value = versionLength - 1;
        updateTimeline(versionLength - 1);
    }
    if (infoDiv) infoDiv.style.display = "none";
});

document.addEventListener("keydown", e => {
    onPress(e.code);
    if (combination.every(k => keyPressed.includes(k))) {
        consoleUi.style.display = consoleOpen ? "none" : "block";
        nonConsole.style.display = consoleOpen ? "block" : "none";
        consoleOpen = !consoleOpen;
    }
});

document.addEventListener("keyup", e => {
    onRelease(e.code);
});