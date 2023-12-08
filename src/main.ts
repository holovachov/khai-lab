import { Calculator, UICalculator } from './calculator';

document.addEventListener('DOMContentLoaded', () => {
  initCalculator();
});

function initCalculator(): void {
  const calculator = new Calculator();

  new UICalculator()
    .addResult()
    .addButton('7', 'num', 'primary')
    .addButton('8', 'num', 'primary')
    .addButton('9', 'num', 'primary')
    .addButton('/', 'divide', 'secondary')
    .addButton('4', 'num', 'primary')
    .addButton('5', 'num', 'primary')
    .addButton('6', 'num', 'primary')
    .addButton('*', 'multiply', 'secondary')
    .addButton('1', 'num', 'primary')
    .addButton('2', 'num', 'primary')
    .addButton('3', 'num', 'primary')
    .addButton('-', 'subtract', 'secondary')
    .addButton('C', 'clear', 'secondary')
    .addButton('0', 'num', 'primary')
    .addButton('=', 'calc', 'secondary')
    .addButton('+', 'add', 'secondary')
    .create((value: string, type: string, calculatorInstance: UICalculator) => {
      const result = calculator.execute(value, type).getResultAsString();

      calculatorInstance.updateResult(result);
    });
}
