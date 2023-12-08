import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator | null = null;

  beforeEach(() => {
    calculator = new Calculator();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('test1', () => {
    calculator?.execute('10', 'num');
    calculator?.execute('+', 'add');
    calculator?.execute('10', 'num');
    calculator?.execute('=', 'calc');

    expect(calculator?.getResult()).toBe(20);
  });

  test('test2', () => {
    calculator?.execute('10', 'num');
    calculator?.execute('+', 'add');
    calculator?.execute('10', 'num');
    calculator?.execute('/', 'divide');
    calculator?.execute('4', 'num');
    calculator?.execute('=', 'calc');

    expect(calculator?.getResult()).toBe(5);
  });

  test('test3', () => {
    calculator?.execute('10', 'num');
    calculator?.execute('+', 'add');
    calculator?.execute('10', 'num');
    calculator?.clear();

    expect(calculator?.getResult()).toBe(0);
  });
});
