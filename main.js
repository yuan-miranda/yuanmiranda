document.addEventListener("DOMContentLoaded", () => {
    const veryVerySecretCompletelyHiddenCheatCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
    let userInput = [];
    let timer = null;

    function resetInput() {
        userInput = [];
        clearTimeout(timer);
        timer = null;
    }

    document.addEventListener("keydown", (e) => {
        userInput.push(e.code);
        if (!timer) timer = setTimeout(() => {
            resetInput();
        }, 5000);

        if (userInput.length === veryVerySecretCompletelyHiddenCheatCode.length) {
            if (userInput.every((code, index) => code === veryVerySecretCompletelyHiddenCheatCode[index])) {
                alert("web console enabled pffft");
            }
            resetInput();
        }
    })
})