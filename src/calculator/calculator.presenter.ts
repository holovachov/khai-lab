export class UICalculator {
  private readonly element: HTMLDivElement;
  private result!: HTMLDivElement;
  private buttons!: HTMLDivElement;

  constructor() {
    this.element = document.createElement('div');
    this.element.setAttribute('class', 'calculator');
  }

  public addResult(): this {
    this.result = document.createElement('div');
    this.result.setAttribute('class', 'calculator-result');
    this.result.textContent = '0';
    this.element.appendChild(this.result);

    return this;
  }

  public addButton(value: string, type: string, theme: string): this {
    if (!this.buttons) {
      this.buttons = document.createElement('div');
      this.buttons.setAttribute('class', 'calculator-buttons');
      this.element.appendChild(this.buttons);
    }

    const button = document.createElement('span');

    button.setAttribute('class', `calculator-button ${theme}`);
    button.setAttribute('data-type', type);
    button.setAttribute('data-value', value);
    button.innerText = value;

    this.buttons.append(button);

    return this;
  }

  public updateResult(value: string): void {
    if (this.result) {
      this.result.textContent = value ?? '0';
    }
  }

  public create(handler?: (value: string, type: string, instance: UICalculator) => void): void {
    this.buttons.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;

      if (target.tagName.toLowerCase() === 'span' && typeof handler === 'function' && handler) {
        const targetType = target.getAttribute('data-type')! as string;
        const targetValue = target.getAttribute('data-value')!;

        handler(targetValue, targetType, this);
      }
    });

    document.body.appendChild(this.element);
  }
}
