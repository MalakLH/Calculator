const display = document.getElementById('display');

function append(value) {
    if (display.textContent === '0') display.textContent = '';
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        clearDisplay();
    }
}
function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}