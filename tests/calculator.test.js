const Calculator = require('../src/calculator.js');
let calculator;

beforeEach(() => {
  calculator = new Calculator();
});

describe('Calculator operations', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test('multiplies 3 * 2 to equal 6', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
  });

  test('divides 6 / 2 to equal 3', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(6, 0)).toThrow('Division by zero is not allowed.');
  });

  test('calculates the square root of 9 to equal 3', () => {
    expect(calculator.squareRoot(9)).toBe(3);
  });

  test('throws error when calculating the square root of a negative number', () => {
    expect(() => calculator.squareRoot(-1)).toThrow('Square root of negative number is not allowed.');
  });

  // New tests
  test('calculates the square of 4 to equal 16', () => {
    expect(calculator.square(4)).toBe(16);
  });

  test('adds -1 + -2 to equal -3', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  });

  test('subtracts -5 - -2 to equal -3', () => {
    expect(calculator.subtract(-5, -2)).toBe(-3);
  });

  test('multiplies 3 * 0 to equal 0', () => {
    expect(calculator.multiply(3, 0)).toBe(0);
  });
});