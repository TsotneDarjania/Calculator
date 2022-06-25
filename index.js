

class Calculator {

    constructor(currentTextElement, previousTextElement){
     this.currentNumber = '';
     this.previousNumber = '';
     this.operation = '';
    }

    addOperation(operation){
        this.operation = operation;
        this.previousNumber = this.currentNumber;
        this.currentNumber = operation;
        this.display();
    }

    appendNumber(number){
        this.currentNumber = this.currentNumber.toString() + number.toString();
        this.display();
    }

    display(){
        currentTextElement.innerText = this.currentNumber;
        previousTextElement.innerText = this.previousNumber;
    }
}


let numberButtons = document.querySelectorAll("[data-number]");
let operationButtons = document.querySelectorAll("[data-operation]");


let previousTextElement = document.querySelector('.previous');
let currentTextElement = document.querySelector('.current');
let calculator = new Calculator(currentTextElement, previousTextElement);

numberButtons.forEach( button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
    })
})

operationButtons.forEach( button => {
    button.addEventListener("click", () => {
        calculator.addOperation(button.innerText);
    })
})