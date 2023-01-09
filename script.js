const calculator = document.getElementById("calculator");
const buttons = calculator.getElementsByTagName("input");
const display = document.getElementById("display");
for (let button of buttons) {
  button.addEventListener("click", function() {
    const value = this.value;
    if (value === "=") {
      // Calculate and display result
      display.value = eval(display.value);
    } else if (value === "C") {
        // Clear the display
        display.value = "";
    } else {
      // Update the display with the button value
      display.value += value;
    }
  });
}
