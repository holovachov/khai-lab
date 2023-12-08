import { CalculatorOperations, CalculatorOperationType } from './calculator-operations';

interface CalculatorState {
  c: string;
  o1: string;
  o2: string;
  p: string;
  r: string;
}

export class Calculator {
  private readonly state = new Map<keyof CalculatorState, string>()
    .set('c', '0')
    .set('p', '0')
    .set('r', '0')
    .set('o1', '')
    .set('o2', '');

  public getResult(): number {
    return parseFloat(this.state.get('r')!);
  }

  public getResultAsString(): string {
    return this.state.get('r')!;
  }

  public getState(): Map<keyof CalculatorState, string> {
    return this.state;
  }

  public execute(value: string, type: string): this {
    switch (type) {
      case 'num': this.setNum(value);
        break;
      case 'clear': this.clear();
        break;
      case 'calc': this.callCalculation();
        break;
      default: this.callOperation(type);
        break;
    }

    return this;
  }

  public clear(): void {
    this.state
      .set('c', '0')
      .set('p', '0')
      .set('r', '0')
      .set('o1', '')
      .set('o2', '');
  }

  private setNum(value: string): void {
    this.state.set('c', this.state.get('c')!.startsWith('0') ? value : this.state.get('c') + value);
    this.state.set('r', this.state.get('c')!);
  }

  private callCalculation(): void {
    if (!this.state.get('o2')) {
      return;
    }

    const r = CalculatorOperations[this.state.get('o2') as CalculatorOperationType](
      Number(this.state.get('p')),
      Number(this.state.get('c')),
    );

    this.state.set('r', isNaN(r) ? '0' : r.toString());
    this.state.set('c', '0');
    this.state.set('o1', '');
    this.state.set('o2', '');
  }

  private callOperation(type: string): void {
    this.state.set('o1', this.state.get('o2')!);
    this.state.set('o2', type);

    if (this.state.get('o1')) {
      const r = CalculatorOperations[this.state.get('o1') as CalculatorOperationType](
        Number(this.state.get('p')),
        Number(this.state.get('c')),
      );

      this.state.set('r', isNaN(r) ? '0' : r.toString());
      this.state.set('p', this.state.get('r')!);
    } else {
      this.state.set('p', this.state.get('c')!);
    }

    this.state.set('c', '0');
  }
}
