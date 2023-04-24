function calculate(operation, num1, num2) {
    if (operation === '+') {
      return num1 + num2;
    } else if (operation === '-') {
      return num1 - num2;
    } else if (operation === '*') {
      return num1 * num2;
    } else {
      throw new Error('Invalid operation!');
    }
  }

  