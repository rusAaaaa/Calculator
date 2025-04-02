let screen = document.getElementById("screen");
function appendSymbol(symbol) {
    if (screen.innerText === "0") {
        screen.innerText = symbol;
    } else {
        screen.innerText += symbol;
    }
}
function clearScreen() {
    screen.innerText = "0";
}
function calculateResult() {
    try {
        screen.innerText = eval(screen.innerText);
    } catch {
        screen.innerText = "Error";
    }
}
