// Get the display input field
let display = document.querySelector('input[name="display"]');

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to append a character to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to evaluate the expression
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error'; // Display error in case of invalid expression
    }
}

// Event listeners for the buttons
document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value === 'AC') {
            clearDisplay();
        } else if (value === 'DE') {
            deleteLast();
        } else if (value === '=') {
            calculate();
        } else {
            appendToDisplay(value);
        }
    });
});
