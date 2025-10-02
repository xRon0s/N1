function greetAndCalculate(name, a, b) {
    const sum = a + b;
    return `Hello, ${name}! The sum of ${a} and ${b} is ${sum}.`;
}
const usserName = "Alice";
const x = 10;
const y = 20;
const result = greetAndCalculate(usserName, x, y);
console.log(result);
