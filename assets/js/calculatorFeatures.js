const numbersButtons = document.getElementsByClassName("number")
const operatorsButtons = document.getElementsByClassName("operator")
const equalsButton = document.getElementById("equals") 
const deleteButton = document.getElementById("Del")
const clearAllButtons = document.getElementById("C")
const clearCurrentButton = document.getElementById("CE")
const previousNumbersTextElement = document.getElementById("previousNumber")
const currentNumbersTextElement = document.getElementById("currentNumber")


class Calculator {
    constructor(previousNumbersTextElement, currentNumbersTextElement) {
        this.previousNumbersTextElement = previousNumbersTextElement;
        this.currentNumbersTextElement = currentNumbersTextElement;
    }

    clear() {
        this.currentNumbers = "0";
        this.previousNumbers = "";
        this.operation = undefined;
    }

    clearCurrentBtn() {
        this.currentNumbers = "0";
        this.previousNumbers = "";
        this.operation = undefined;
    }

    updateDisplay() {
        this.previousNumbersTextElement.innerText = this.previousNumbers;
        this.currentNumbersTextElement.innerText = this.currentNumbers;
    }
    updateCurrentNumDisplay() {
        this.currentNumbersTextElement.innerText = this.currentNumbers;
    }
}

const calculator = new Calculator(
    previousNumbersTextElement, currentNumbersTextElement
);

clearAllButtons.addEventListener("click", () => {
        calculator.clear();
        calculator.updateDisplay();
});

clearCurrentButton.addEventListener("click", () => {
        calculator.clearCurrentBtn();
        calculator.updateCurrentNumDisplay();
        console.log(clearCurrentButton)
});
