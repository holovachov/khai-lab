export type CalculatorOperationType =
  | 'add'
  | 'divide'
  | 'multiply'
  | 'subtract';

export class CalculatorOperations {
  public static add(a: number, b: number): number {
    return a + b;
  }

  public static subtract(a: number, b: number): number {
    return a - b;
  }

  public static divide(a: number, b: number): number {
    return a / b;
  }

  public static multiply(a: number, b: number): number {
    return a * b;
  }
}
