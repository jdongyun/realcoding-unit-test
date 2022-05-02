export class DivideZeroError extends Error {
  constructor() {
    super('Cannot divide by zero.');
    this.name = 'DivideZeroError';
  }
}

class Calculator {
  plus = (a, b) => {
    return a + b;
  };
  isNegative = (a) => {
    return a < 0;
  };
  getDate = () => {
    return new Date();
  };
  abs = (a) => {
    return Math.abs(a);
  };
  customCalculation = (callback, ...args) => {
    callback(...args);
  };

  minus = (a, b) => {
    return a - b;
  };

  multiply = (a, b) => {
    return a * b;
  };

  divide = (a, b) => {
    if (b === 0) {
      throw new DivideZeroError();
    }
    return a / b;
  }
}
export default Calculator;
