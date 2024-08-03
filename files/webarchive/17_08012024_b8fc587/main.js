const versions = {
    "../../../1_04092024_30b04de/index.html": {
        "commit": "30b04de",
        "commitMessage": "Initial commit",
        "date": "04/09/2024",
        "description": ""
    },
    "../../../2_04092024_ef4a586/index.html": {
        "commit": "ef4a586",
        "commitMessage": "Hello, World!",
        "date": "04/09/2024",
        "description": ""
    },
    "../../../3_04102024_12c236c/index.html": {
        "commit": "12c236c",
        "commitMessage": "check if Github Pages store values.",
        "date": "04/10/2024",
        "description": ""
    },
    "../../../4_04102024_374ba48/index.html": {
        "commit": "374ba48",
        "commitMessage": "just discovered Github Pages is static lol",
        "date": "04/10/2024",
        "description": ""
    },
    "../../../5_05012024_227abb8/index.html": {
        "commit": "227abb8",
        "commitMessage": "test",
        "date": "05/01/2024",
        "description": ""
    },
    "../../../6_07202024_13cab6e/index.html": {
        "commit": "13cab6e",
        "commitMessage": "HAS CONTENT NOW?!?",
        "date": "07/20/2024",
        "description": ""
    },
    "../../../7_07202024_cd33c7e/index.html": {
        "commit": "cd33c7e",
        "commitMessage": "fixed the wrapping issue of the ticker, and made the header sticky.",
        "date": "07/20/2024",
        "description": ""
    },
    "../../../8_07202024_021e208/index.html": {
        "commit": "021e208",
        "commitMessage": "added some very secret code (shh!)",
        "date": "07/20/2024",
        "description": ""
    },
    "../../../9_07202024_2d944bd/index.html": {
        "commit": "2d944bd",
        "commitMessage": "added the console toggler and console input field.",
        "date": "07/20/2024",
        "description": ""
    },
    "../../../10_07232024_9eeaa41/index.html": {
        "commit": "9eeaa41",
        "commitMessage": "added website design history browsing, (testing)",
        "date": "07/23/2024",
        "description": ""
    },
    "../../../11_07242024_152e697/index.html": {
        "commit": "152e697",
        "commitMessage": "fixed the path error when browsing the archive recursively",
        "date": "07/24/2024",
        "description": ""
    },
    "../../../12_07242024_54ea0a4/index.html": {
        "commit": "54ea0a4",
        "commitMessage": "Added archive info expand",
        "date": "07/24/2024",
        "description": ""
    },
    "../../../13_07242024_e0eca97/index.html": {
        "commit": "e0eca97",
        "commitMessage": "fixed the inconsistent naming of folders.",
        "date": "07/24/2024",
        "description": ""
    },
    "../../../14_07242024_ccd655c/index.html": {
        "commit": "ccd655c",
        "commitMessage": "(test) github pages might not syncing",
        "date": "07/24/2024",
        "description": ""
    },
    "../../../15_07242024_9bb3571/index.html": {
        "commit": "9bb3571",
        "commitMessage": "(test2) ...",
        "date": "07/24/2024",
        "description": ""
    },
    "../../../16_08012024_42a76b9/index.html": {
        "commit": "42a76b9",
        "commitMessage": "just did a lil bit of update.",
        "date": "08/01/2024",
        "description": ""
    },
    "../../index.html": {
        "commit": "Current",
        "commitMessage": "Current",
        "date": "Current",
        "description": "Current"
    }
}
const archiveContents = {
    "grade11": {
        "title": "Grade 11",
        "description": "Files related to my Grade 11 year."
    },
    "webarchive": {
        "title": "Web Archive",
        "description": "The design history of this website."
    },
    "thoughts": {
        "title": "Thoughts",
        "description": "My thoughts on various topics and random ideas."
    }
}

combination = ["ControlLeft", "Slash"];
let keyPressed = [];
let consoleUi;
let consoleOpen = false;
let nonConsole;
let versionFrame;
let selectedVersion;
let infoDiv;
let infoDivOpen = false;

function expandInfo(boolOverride=false) {
    const pCommit = document.querySelector(".commit");
    const pCommitMessage = document.querySelector(".commit-message");
    const pDate = document.querySelector(".date");
    const pDescription = document.querySelector(".description");
    versionFrame = document.querySelector(".timelineFrame");

    if (!boolOverride) infoDivOpen = !infoDivOpen;
    if (infoDivOpen) infoDiv.style.display = "block";
    else infoDiv.style.display = "none";
    if (boolOverride) {
        pCommit.textContent = `Commit: ${versions[selectedVersion].commit}`;
        pCommitMessage.textContent = `Commit Message: ${versions[selectedVersion].commitMessage}`;
        pDate.textContent = `Date: ${versions[selectedVersion].date}`;
        pDescription.textContent = `Description: ${versions[selectedVersion].description}`;
    }
}

function updateTimeline(value) {
    versionFrame = document.querySelector(".timelineFrame");
    selectedVersion = Object.keys(versions)[value];
    versionFrame.src = selectedVersion;
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

    const archiveContentDiv = document.querySelector(".archive-content");
    if (archiveContentDiv) {
        Object.keys(archiveContents).forEach(key => {
            const tab = document.createElement("div");
            const tabTitle = document.createElement("div");
            const tabDesc = document.createElement("div");
            const titleText = document.createElement("p");
            const descText = document.createElement("p");
    
            tab.className = "tab";
            tabTitle.className = "tab-title";
            tabDesc.className = "tab-desc";
            titleText.textContent = archiveContents[key].title;
            descText.textContent = archiveContents[key].description;
    
            tabTitle.appendChild(titleText);
            tabDesc.appendChild(descText);
            tab.appendChild(tabTitle);
            tab.appendChild(tabDesc);
            archiveContentDiv.appendChild(tab);
        });
    }

    
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