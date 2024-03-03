function calculate(operation, value1, value2) {
    // verification symbol
    switch (operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return "Undefined operator";
    }
}

console.log("Third exercise")
console.log(
calculate('+', 1, 2),
calculate('*', 2, 2),
calculate('/', 6, 2),
calculate('-', 8, 10)
)