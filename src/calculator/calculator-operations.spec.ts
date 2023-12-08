import { CalculatorOperations } from './calculator-operations';

describe('CalculatorOperations', () => {
  test('add', () => {
    expect(CalculatorOperations.add(5, 5)).toBe(10);
  });

  test('subtract', () => {
    expect(CalculatorOperations.subtract(10, 2)).toBe(8);
  });

  test('divide', () => {
    expect(CalculatorOperations.divide(20, 2)).toBe(10);
  });

  test('multiply', () => {
    expect(CalculatorOperations.multiply(5, 5)).toBe(25);
  });
});
