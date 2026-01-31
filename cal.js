const display=document.calc.display;
const buttons=document.querySelectorAll('input[type="button"]');
buttons.forEach(button => {
    button.addEventListener("click", function () {
        const value = this.value;

        if (value === "c") {
            display.value = "";
        }
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } 
          catch(error) {
                display.value = "Syntax Error";
            }
        }
        else {
            display.value += value;
        }
    });
});
