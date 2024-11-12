
/**
 * A simple Calculator class to perform basic arithmetic operations.
 */
class Calculator {
    /**
     * Adds two numbers.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The sum of the two numbers.
     */
    add(a, b) {
        return a + b;
    }

    /**
     * Subtracts the second number from the first number.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The difference of the two numbers.
     */
    subtract(a, b) {
        return a - b;
    }

    /**
     * Multiplies two numbers.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The product of the two numbers.
     */
    multiply(a, b) {
        return a * b;
    }

    /**
     * Divides the first number by the second number.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The quotient of the two numbers.
     */
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    /**
     * Calculates the square of a number.
     * @param {number} a - The number to be squared.
     * @returns {number} The square of the number.
     */
    square(a) {
        return a * a;
    }

    /**
     * Calculates the square root of a number.
     * @param {number} a - The number to find the square root of.
     * @returns {number} The square root of the number.
     */
    squareRoot(a) {
        if (a < 0) {
            throw new Error("Square root of negative number is not allowed.");
        }
        return Math.sqrt(a);
    }
}


module.exports = Calculator;