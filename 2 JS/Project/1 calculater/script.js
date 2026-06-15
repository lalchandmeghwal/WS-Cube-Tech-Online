

function appendValue(value) {
    if (display.value === 'Error') {
        display.value = "";
    }
    display.value += value;
}



function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function clearDisplay() {
    display.value = "";
}
